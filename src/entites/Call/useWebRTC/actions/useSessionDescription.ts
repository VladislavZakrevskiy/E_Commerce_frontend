import { MutableRefObject, useEffect } from 'react';
import socket from '../../../../app/socket';
import { ACTIONS } from './ACTIONS';

type sessionDescResponse = {
	peerID: string;
	sessionDescription: RTCSessionDescriptionInit;
};

export const useSessionDescription = (peerConnection: MutableRefObject<any>) => {
	useEffect(() => {
		async function setRemoteMedia({
			peerID,
			sessionDescription,
		}: sessionDescResponse) {
			await peerConnection.current[peerID].setRemoteDescription(
				new RTCSessionDescription(sessionDescription)
			);

			if ((sessionDescription.type == 'offer')) {
				const answer = await peerConnection.current[peerID].createAnswer();

				await peerConnection.current[peerID].setLocalDescription(answer);

				socket.emit(ACTIONS.RELAY_SDP, {
					peerID,
					sessionDescription: answer,
				});
			}
		}

		socket.on(ACTIONS.SESSION_DESCRIPTION, setRemoteMedia);

		return () => {
			socket.off(ACTIONS.SESSION_DESCRIPTION);
		};
	}, []);
};
