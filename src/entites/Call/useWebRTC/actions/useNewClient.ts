import { useEffect, MutableRefObject } from 'react';
import socket from '../../../../app/socket';
import { ACTIONS } from './ACTIONS';
import { LOCAL_VIDEO } from '../useWebRTC';

export const useNewClient = (
	localMediaStream: MutableRefObject<any>,
	peerMediaElements: MutableRefObject<any>,
	addNewClient: (client: string, cb: () => void) => void,
	roomId: string
) => {
	useEffect(() => {
		async function startCapture() {
			localMediaStream.current = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: {
					width: 1280,
					height: 720,
				},
			});

			addNewClient(LOCAL_VIDEO, () => {
				const localVideoElement = peerMediaElements.current[LOCAL_VIDEO];

				if (localVideoElement) {
					localVideoElement.volume = 0;

					localVideoElement.srcObject = localMediaStream.current;
				}
			});
		}

		startCapture()
			.then(() => socket.emit(ACTIONS.JOIN, { room: roomId }))
			.catch(() => console.error('Error in useWebRTC'));

		return () => {
			localMediaStream.current
				?.getTracks()
				?.forEach((track: any) => track.stop());
			socket.emit(ACTIONS.LEAVE);
		};
	}, [roomId]);
};
