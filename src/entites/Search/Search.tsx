import { InputAdornment, Paper, Popper, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import SearchList from '../../shared/SearchList';
import SeacrhIcon from '@mui/icons-material/Search';

const Search = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const debouncedSearchValue = useDebounce(searchValue, 1000);
	const [anchor, setAnchor] = useState<boolean>(false);
	const [ref, setRef] = useState<HTMLElement | null>(null);

	const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
		setRef(event.currentTarget);
	};

	useEffect(() => {
		if (debouncedSearchValue) {
			setAnchor((prev) => !prev);
		}
	}, [debouncedSearchValue]);

	const open = Boolean(anchor);
	const id = open ? 'simple-popper-2' : undefined;

	return (
		<>
			<Paper>
				<TextField
					aria-describedby={id}
					value={searchValue}
					onChange={handleClick}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SeacrhIcon />
							</InputAdornment>
						),
					}}
				/>
			</Paper>
			<Popper open={open} id={id} anchorEl={ref}>
				<SearchList
					setAnchorEl={setAnchor}
					items={[
						{ name: 'Item 1', price: '100', id: '1' },
						{ name: 'Item 2', price: '200', id: '2' },
						{ name: 'Item 3', price: '300', id: '3' },
						{ name: 'Item 4', price: '400', id: '4' },
					]}
				/>
			</Popper>
		</>
	);
};

export default Search;
