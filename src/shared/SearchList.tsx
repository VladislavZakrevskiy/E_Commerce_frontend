import {
	Box,
	Button,
	IconButton,
	List,
	ListItem,
	Typography,
} from '@mui/material';
import { IProduct } from '../models/IProduct';
import { useNavigate } from 'react-router-dom';
import { Cancel } from '@mui/icons-material';
import { Dispatch, SetStateAction } from 'react';

interface ISearchListProps {
	items: Pick<IProduct, 'id' | 'name' | 'price'>[];
    setAnchorEl: Dispatch<SetStateAction<boolean>>
}

const SearchList = ({ items, setAnchorEl }: ISearchListProps) => {
	const nav = useNavigate();

	return (
		<List
			sx={{
				bgcolor: 'white',
				borderRadius: 5,
				boxShadow: '2px 2px 5px 2px black',
			}}
		>
			<Box
				width={'100%'}
				height={'10%'}
				display={'flex'}
				justifyContent={'flex-end'}
				paddingRight={2}
			>
				<IconButton
                    onClick={() => setAnchorEl(prev => !prev)}
                >
					<Cancel />
				</IconButton>
			</Box>
			{items.map((item) => (
				<ListItem
					sx={{
						display: 'grid',
						gridTemplateColumns: '2fr 1fr 1fr',
						width: '100%',
					}}
				>
					<Typography>{item.name}</Typography>
					<Typography>{item.price}</Typography>
					<Button onClick={() => nav('/product/' + item.id)}>Learn More</Button>
				</ListItem>
			))}
		</List>
	);
};

export default SearchList;
