import { useMemo, useState } from 'react';

export const useSort = (cb: () => void) => {
	const [sortTag, setSortTag] = useState('');

	const memoResult = useMemo(() => {
		cb();
	}, [sortTag]);

	return { setSortTag, memoResult };
};
