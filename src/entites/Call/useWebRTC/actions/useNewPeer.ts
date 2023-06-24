import { MutableRefObject, useEffect } from 'react';
import socket from '../../../../app/socket';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import freeice from 'freeice';
import { ACTIONS } from './ACTIONS';

type newPeerResponse = {
	peerID: string;
	createOffer: boolean;
};

export const useNewPeer = (
	peerConnection: MutableRefObject<any>,
	addNewClient: (newClient: string, cb: () => void) => void,
	peerMediaElements: MutableRefObject<any>,
	localMediaStream: MutableRefObject<any>
) => {
	useEffect(() => {
		async function newPeerHandler({ peerID, createOffer }: newPeerResponse) {
			if (peerID in peerConnection.current) {
				return console.log('already connected to this peer');
			}

			peerConnection.current[peerID] = new RTCPeerConnection({
				iceServers: freeice(),
			});

			peerConnection.current[peerID].onicecandidate = (event: {
				candidate: string;
			}) => {
				if (event.candidate) {
					socket.emit(ACTIONS.RELAY_ICE, {
						peerID,
						iceCandidate: event.candidate,
					});
				}
			};
			let tracksNumber = 0;

			peerConnection.current[peerID].ontrack = ({
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				streams: [remoteStream],
			}) => {
				tracksNumber++;

				if (tracksNumber === 2) {
					tracksNumber = 0;
					addNewClient(peerID, () => {
						peerMediaElements.current[peerID].srcObject = remoteStream;
					});
				}
			};

			localMediaStream.current?.getTracks().forEach((track: any) => {
				peerConnection.current[peerID]!.addTrack(
					track,
					localMediaStream.current
				);
			});

			if (createOffer) {
				const offer = await peerConnection.current[peerID].createOffer();

				await peerConnection.current[peerID].setLocalDescription(offer);

				socket.emit(ACTIONS.RELAY_SDP, {
					peerID,
					sessionDescription: offer,
				});
			}
		}

		socket.on(ACTIONS.ADD_PEER, newPeerHandler);

		return () => {
			socket.off(ACTIONS.ADD_PEER);
		};
	}, []);
};
