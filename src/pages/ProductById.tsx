import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductImageSlider from '../shared/ProductImageSlider';
import ProductDescription from '../shared/ProductDescription';
import RecommendList from '../widgets/RecommendList';
import { IProduct } from '../models/IProduct';

const ProductById = () => {
    const {id} = useParams()
    const product: IProduct = {
        id: '1',
        images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
        name: 'Name 1',
        price: '100',
        description: 'desc 1',
        tag: 'For Home',
        created_at: 1234567898,
        rating: 5,
        sales: 12345,
        seller: 'Seller 1',
        seller_id: 'sel_1'
    }


    return (
        <Container>
            <ProductImageSlider width='100%' images={product.images}/>
            <ProductDescription product={product} isWithDesc/> 
            <RecommendList products={[product, product, product]}/> 
        </Container>
    )
}

export default ProductById