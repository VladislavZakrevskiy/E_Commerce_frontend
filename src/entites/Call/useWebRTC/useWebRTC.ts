import { useCallback, useRef } from 'react';
import { useStateWithCallback } from './useStateWithCallback';
import { useNewPeer } from './actions/useNewPeer';
import { useIceCandidate } from './actions/useIceCandidate';
import { useRemovePeer } from './actions/useRemovePeer';
import { useNewClient } from './actions/useNewClient';
import { useSessionDescription } from './actions/useSessionDescription';

export const LOCAL_VIDEO = 'LOCAL_VIDEO';

export const useWebRTC = (roomId: string) => {
	const [clients, updateClients] = useStateWithCallback<any[]>([]);

	const addNewClient = useCallback(
		(newClient: string, cb: () => void) => {
			updateClients((list: any[]) => {
				if (!list.includes(newClient)) {
					return [...list, newClient];
				}

				return list;
			}, cb);
		},
		[clients, updateClients]
	);

	const peerConnection = useRef({});
	const localMediaStream = useRef(null);
	const peerMediaElements = useRef({ [LOCAL_VIDEO]: null });

	useNewPeer(peerConnection, addNewClient, peerMediaElements, localMediaStream);

	useSessionDescription(peerConnection);

	useIceCandidate(peerConnection);

	useRemovePeer(peerConnection, peerMediaElements, updateClients);

	useNewClient(localMediaStream, peerMediaElements, addNewClient, roomId);

	const provideMediaRef = useCallback((id: string, node: any) => {
		peerMediaElements.current[id] = node;
	}, []);

	return { clients, provideMediaRef };
};
