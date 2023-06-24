import {
	Box,
	Container,
	IconButton,
	ListItem,
	Typography,
} from '@mui/material';
import { IProduct } from '../../models/IProduct';
import Image from '../../shared/Image';
import { Delete } from '@mui/icons-material';
import { useAppDispatch } from '../../app/store/hooks';
import { deleteItem } from '../../app/store/slice/BasketSlice';
import { ReactNode } from 'react';

type BasketItemProps = {
	product: {
		product: IProduct;
		number: number;
	};
	i: number;
};

export const CenteredTypography = ({ children }: { children: ReactNode }) => {
	return (
		<Typography alignSelf={'center'} justifySelf={'center'}>
			{children}
		</Typography>
	);
};

const BasketItem = ({ product: { number, product }, i }: BasketItemProps) => {
	const dispatch = useAppDispatch();

	return (
		<ListItem
			sx={{
				display: 'grid',
				gridTemplateColumns: '1fr 2fr 2fr 1fr 1fr 1fr',
				gap: 1,
				p: 0,
				m: 0
			}}
		>
			<CenteredTypography>{i + 1}.</CenteredTypography>
			<Box alignSelf={'center'} justifySelf={'center'}>
				<Image src={product.images[0]} alt="Продукт" width={'10'} />
			</Box>
			<CenteredTypography>{product.name}</CenteredTypography>
			<CenteredTypography>{number}x</CenteredTypography>
			<CenteredTypography>{product.price}</CenteredTypography>
			<IconButton onClick={() => dispatch(deleteItem(product.id))}>
				<Delete />
			</IconButton>
		</ListItem>
	);
};

export default BasketItem;
