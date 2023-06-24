import {
	Select,
	MenuItem,
	SelectChangeEvent,
	InputLabel,
	FormControl,
} from '@mui/material';
import { useState } from 'react';

interface ISelectorProps {
	menuItems: string[];
	values: string[];
	cb: (value: string) => void;
	label: string;
}

const Selector = ({ cb, menuItems, values, label }: ISelectorProps) => {
	const [value, setValue] = useState<string>('');

	const handleChange = (event: SelectChangeEvent<string>) => {
		cb(event.target.value);
		setValue(event.target.value);
	};

	return (
		<FormControl fullWidth margin={'normal'} component={'div'}>
			<InputLabel id={label}>{label}</InputLabel>
			<Select
				labelId={label}
				value={value}
				label={label}
				onChange={(e) => handleChange(e)}
			>
				{menuItems.map((menuItem, i) => (
					<MenuItem key={label + '-' + i} value={values[i]}>
						{menuItem}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default Selector;
