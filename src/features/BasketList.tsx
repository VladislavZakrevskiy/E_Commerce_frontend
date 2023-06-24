import { Box, Button, ButtonGroup, Container, ListItem, Typography } from '@mui/material';
import BasketItem, { CenteredTypography } from '../entites/Basket/BasketItem';
import { IProduct } from '../models/IProduct';
import { clearBasket } from '../app/store/slice/BasketSlice';
import { useAppDispatch } from '../app/store/hooks';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type BasketListProps = {
    products: {
        product: IProduct
        number: number
    }[]
}

const BasketList = ({products}: BasketListProps) => {
    const dispatch = useAppDispatch()
    const nav = useNavigate()
    const {t} = useTranslation()

	return (
		<Container
			sx={{
				bgcolor: 'white',
				minWidth: '20vw',
				maxWidth: '20vw',
				minHeight: '50vh',
				maxHeight: '50vh',
				boxShadow: '1px 4px 10px 1px black',
				borderRadius: 5,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				overflowY: 'scroll',
				pt: 5,
			}}
		>
			{products.length === 0 ? (
				<Typography variant="h4">{t('nothing')}</Typography>
			) : (
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={2}
					sx={{
						bgcolor: 'white',
						minWidth: '40vw',
						maxWidth: '40vw',
						minHeight: '50vh',
						maxHeight: '50vh',
						borderRadius: 5,
					}}
				>
					<ButtonGroup>
						<Button onClick={() => dispatch(clearBasket())}>Clear</Button>
						<Button onClick={() => nav('/buy')}>Buy All</Button>
					</ButtonGroup>
					<Box display={'flex'} flexDirection={'column'} gap={1}>
						<ListItem
							sx={{
								display: 'grid',
								gridTemplateColumns: '1fr 2fr 2fr 1fr 1fr 1fr',
								gap: 1,
								p: 0,
								m: 0,
							}}
						>
							<CenteredTypography>{t('number')}</CenteredTypography>
							<CenteredTypography>{t('photo')}</CenteredTypography>
							<CenteredTypography>{t('name')}</CenteredTypography>
							<CenteredTypography>{t('pieces')}</CenteredTypography>
							<CenteredTypography>{t('price')}</CenteredTypography>
						</ListItem>
						{products.map((product, i) => (
							<BasketItem product={product} i={i} />
						))}
					</Box>
				</Box>
			)}
		</Container>
	);
};

export default BasketList;
