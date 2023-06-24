import { Box } from '@mui/material';
import Selector from '../shared/Selector';
import { useCallback } from 'react';

interface IProductSortBarProps {
	setWidth: React.Dispatch<React.SetStateAction<string>>;
}

const OptionSortBar = ({ setWidth }: IProductSortBarProps) => {
	const popularitySortHandle = useCallback(
		(value: string) => {
			setWidth(value);
		},
		[setWidth]
	);

	return (
		<Box component={'div'} display={'flex'} paddingLeft={2} paddingRight={2}>
			<Selector
				cb={popularitySortHandle}
				label="Group"
				menuItems={['For 1', 'For 2', 'For 3', 'For 4', 'For 5']}
				values={['99%', '49%', '32%', '24%', '19%']}
			/>
		</Box>
	);
};

export default OptionSortBar;
