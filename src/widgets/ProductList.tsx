import Product from '../entites/Product/Product';
import { IProduct } from '../models/IProduct';
import { Box, Button } from '@mui/material';
import Title from '../shared/Title';
import { useTranslation } from 'react-i18next';

interface IProductListProps {
	products: IProduct[];
	width: string;
	title?: string;
}

const ProductList = ({
	products,
	width,
	title = 'products-for-you',
}: IProductListProps) => {
	const { t } = useTranslation();

	return (
		<>
			<Title>{t(title)}</Title>
			<Box
				display="flex"
				flexWrap={'wrap'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				{products.map((product) => (
					<Product
						widthImage={width}
						width={width}
						product={product}
						key={product.id}
					/>
				))}
			</Box>
			<Button variant="contained" sx={{ mt: 1, mb: 1 }} fullWidth>
				{t('more')}
			</Button>
		</>
	);
};

export default ProductList;
