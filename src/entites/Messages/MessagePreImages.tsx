import { Container } from '@mui/material';
import Slider from 'react-slick';

type MessagePreImagesProps = {
	images: File[];
};

const MessagePreImages = ({ images }: MessagePreImagesProps) => {

    if (images.length === 0) {
        return null
    }

	return (
		<Container sx={{height: '25vh'}}>
			<Slider>
				{images.map((image) => (
					<img src={image.webkitRelativePath} alt={image.name} />
				))}
			</Slider>
		</Container>
	);
};

export default MessagePreImages;
