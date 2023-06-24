import { ImageListItem } from '@mui/material';

interface IImageProps {
	src: string;
	alt: string;
	width: string;
}

const Image = ({ src, alt, width }: IImageProps) => {
	return (
		<ImageListItem>
			<img
				src={src}
				alt={alt}
				style={{
					width: width + 'vh',
					height: width + 'vh',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
				}}
			/>
		</ImageListItem>
	);
};

export default Image;
