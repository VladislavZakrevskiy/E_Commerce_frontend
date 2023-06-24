import { useState, useCallback, useRef, useEffect } from 'react';

export const useStateWithCallback = <T>(initialState: T) => {
	const [state, setState] = useState<T>(initialState);
	const cbRef = useRef<(state: T) => void | null>(null);

	const updateState = useCallback((newState: T, cb: (state: T) => T) => {
		cbRef.current = cb;

		setState((prev: T) =>
			typeof newState === 'function' ? newState(prev) : newState
		);
	}, []);

	useEffect(() => {
		if (cbRef.current) {
			cbRef.current(state);
			cbRef.current = null;
		}
	}, [state]);

	return [state, updateState];
};
