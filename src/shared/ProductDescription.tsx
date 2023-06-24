import { Link, useParams } from 'react-router-dom';
import { IProduct } from '../models/IProduct';
import { CardContent, Typography, Box, Rating } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IProductDescriptionProps {
	product: IProduct;
	isWithDesc?: boolean
}

const ProductDescription = ({ product, isWithDesc = false }: IProductDescriptionProps) => {
	const {
		created_at,
		description,
		id,
		name,
		price,
		rating,
		sales,
		tag,
		seller,
		seller_id,
	} = product;
	const { t } = useTranslation();

	return (
		<CardContent>
			<Typography variant="body2">{tag}</Typography>
			<Box>
				<Box>
					<Typography gutterBottom variant="h4" component="div">
						{name}
					</Typography>
					<Typography gutterBottom variant="h5" component="div">
						{price}
					</Typography>
				</Box>
				<Box
					p={2}
					borderColor={'black'}
					borderRadius={'20px'}
					border={'1px solid'}
					width={'min-content'}
				>
					{isWithDesc && 
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>}
					<Box display="flex" gap={1} alignItems={'center'}>
						<Rating readOnly value={rating} precision={0.5} />
						<Typography variant="body2">
							{t('sales')}: {sales}
						</Typography>
					</Box>
					<Typography variant="body2">
						{new Date(created_at).toDateString()}
					</Typography>
					<Typography variant="body2">
						{t('product-id')}: <Link to={`/product/` + id}>{id}</Link>
					</Typography>
					<Typography variant="body2">
						{t('seller')}: <Link to={'/seller/' + seller_id}>{seller}</Link>{' '}
					</Typography>
				</Box>
			</Box>
		</CardContent>
	);
};

export default ProductDescription;
