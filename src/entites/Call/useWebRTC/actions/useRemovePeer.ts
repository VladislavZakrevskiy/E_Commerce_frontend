import { useEffect, MutableRefObject } from 'react';
import socket from '../../../../app/socket';
import { ACTIONS } from './ACTIONS';

export const useRemovePeer = (
	peerConnection: MutableRefObject<any>,
	peerMediaElements: MutableRefObject<any>,
	updateClients:
		| any[]
		| ((newState: any[], cb: (state: any[]) => any[]) => void)
) => {
	useEffect(() => {
		socket.on(ACTIONS.REMOVE_PEER, ({ peerID }) => {
			if (peerConnection.current[peerID]) {
				peerConnection.current[peerID].close();
			}

			delete peerConnection.current[peerID];
			delete peerMediaElements.current[peerID];

			updateClients((list: string[]) =>
				list.filter((c: string) => c !== peerID)
			);
		});
		return () => {
			socket.off(ACTIONS.REMOVE_PEER);
		};
	}, []);
};
