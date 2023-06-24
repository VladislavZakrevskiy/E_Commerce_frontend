import { Box, Typography, Card, CardContent, CardActions, ButtonGroup, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import BasketItem from '../entites/Basket/BasketItem';
import { useEffect } from 'react';
import { clearBasket, countSum } from '../app/store/slice/BasketSlice';
import { useNavigate } from 'react-router-dom';

const BasketPage = () => {
	const { products, summa } = useAppSelector((state) => state.BasketSlice);
	const dispatch = useAppDispatch();
    const nav = useNavigate()

	useEffect(() => {
		dispatch(countSum(0));
	}, []);

	return (
		<Box display="grid" gridTemplateColumns={'2fr 1fr'}>
			<Box display='flex' flexDirection={'column'} gap={2}>
				<Typography p={2} variant='h2'>Your Basket</Typography>
				{products.map((product, i) => (
					<BasketItem i={i} product={product} />
				))}
			</Box>
			<Card sx={{p: 2}}>
				<Typography variant="h3">Counts</Typography>
				<CardContent>
					{products.map((product) => (
						<Typography variant='body2'>
							{product.product.price} * {product.number} +
						</Typography>
					))}
                    <Typography variant='h6'>= {summa}</Typography>
				</CardContent>
                <CardActions>
                    <ButtonGroup fullWidth>
                        <Button>Pay</Button>
                        <Button onClick={() => {
                            dispatch(clearBasket())
                            nav('/')
                        }}>Cancel/Clear</Button>
                    </ButtonGroup>
                </CardActions>
			</Card>
		</Box>
	);
};

export default BasketPage;
