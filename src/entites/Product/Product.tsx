import ProductImageSlider from '../../shared/ProductImageSlider';
import ProductDescription from '../../shared/ProductDescription';
import { IProduct } from '../../models/IProduct';
import { Card, CardActions, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/store/hooks';
import { pushToBasket } from '../../app/store/slice/BasketSlice';

interface IProductProps {
	product: IProduct;
	width: string;
	widthImage: string;
}

const Product = ({ product, width, widthImage }: IProductProps) => {
	const { t } = useTranslation();
	const nav = useNavigate();
	const dispatch = useAppDispatch()

	return (
		<Card sx={{ width, p: 1 }}>
			<ProductImageSlider images={product.images} width={widthImage} />
			<ProductDescription product={product} />
			<CardActions>
				<Button onClick={() => dispatch(pushToBasket(product))} size="small">{t('buy')}</Button>
				<Button onClick={() => nav('/product/' + product.id)} size="small">
					{t('learn-more')}
				</Button>
			</CardActions>
		</Card>
	);
};

export default Product;
