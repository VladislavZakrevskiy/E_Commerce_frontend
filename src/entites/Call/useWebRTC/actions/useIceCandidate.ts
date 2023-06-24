import { MutableRefObject, useEffect } from "react";
import socket from "../../../../app/socket";
import { ACTIONS } from "./ACTIONS";

export const useIceCandidate = (peerConnection: MutableRefObject<any>) => {
    useEffect(() => {
		socket.on(ACTIONS.ICE_CANDIDATE, ({ peerID, iceCandidate }) => {
			peerConnection.current[peerID].addIceCandidate(
				new RTCIceCandidate(iceCandidate)
			);
		});

		return () => {
			socket.off(ACTIONS.ICE_CANDIDATE);
		};
	}, []);
}