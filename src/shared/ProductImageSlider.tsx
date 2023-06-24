import { CardMedia } from '@mui/material';
import Slider from 'react-slick';
import Image from './Image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IProductImageSliderProps {
	images: string[];
	width: string;
}

const ProductImageSlider = ({ images, width }: IProductImageSliderProps) => {
	const settings = {
		centerMode: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		adaptiveHeight: true,
	};

	return (
		<CardMedia sx={{ overflowX: 'hidden', width: '90%' }}>
			<Slider {...settings}>
				{images.map((image, i) => (
					<Image
						alt={`${i + 1} Image`}
						src={image}
						key={image}
						width={width.split('%')[0]}
					/>
				))}
			</Slider>
		</CardMedia>
	);
};

export default ProductImageSlider;
