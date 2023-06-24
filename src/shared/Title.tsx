import { Typography } from '@mui/material';

interface ITitleProps {
	fontSize?: string;
	textAlign?: string;
    children: any
}

const Title = ({ fontSize = '56px', textAlign = 'center', children }: ITitleProps) => {
	return (
		<Typography
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
			textAlign={textAlign}
			component={'h1'}
			fontSize={fontSize}
			m={2}
		>
            {children}
        </Typography>
	);
};

export default Title;
