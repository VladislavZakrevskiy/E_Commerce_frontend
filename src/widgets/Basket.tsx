import { IconButton, Popper } from '@mui/material';
import { useAppSelector } from '../app/store/hooks';
import { ShoppingBasket } from '@mui/icons-material';
import { MouseEvent, useState } from 'react';
import BasketList from '../features/BasketList';

const Basket = () => {
	const { products } = useAppSelector((state) => state.BasketSlice);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper-1' : undefined;

	return (
		<>
			<IconButton
				color="inherit"
				aria-describedby={id}
				onClick={handleClick}
				sx={{ m: 1 }}
			>
				<ShoppingBasket />
			</IconButton>
			<Popper id={id} open={open} anchorEl={anchorEl} sx={{ zIndex: 100 }}>
				<BasketList products={products} />
			</Popper>
		</>
	);
};

export default Basket;
