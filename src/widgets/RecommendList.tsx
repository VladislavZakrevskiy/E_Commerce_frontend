import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IProduct } from '../models/IProduct';
import Product from '../entites/Product/Product';
import Title from '../shared/Title'
import { useTranslation } from 'react-i18next';

interface IRecommendListProps {
	products: IProduct[];
	title?: string
}

const RecommendList = ({ products, title = 'rec-for-you' }: IRecommendListProps) => {
	const {t} = useTranslation()

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	return (
		<div style={{overflowX: 'hidden'}}>
			<Title>{ t(title) }</Title>
			<Slider {...settings}>
				{products.map((product) => (
					<Product
						widthImage={'33%'}
						product={product}
						width="100%"
						key={product.id}
					/>
				))}
			</Slider>
		</div>
	);
};

export default RecommendList;
