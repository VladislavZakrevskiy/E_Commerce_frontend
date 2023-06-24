import { ArrowBack, ArrowForward } from '@mui/icons-material';
import {
	Container,
	Stepper,
	Step,
	StepLabel,
	Grid,
	Card,
	Button,
	Box,
	IconButton,
} from '@mui/material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface StepWrapperProps {
	activeStep: number;
	children: ReactNode;
	steps: string[];
}

const StepWrapper = ({ activeStep, children, steps }: StepWrapperProps) => {
	const nav = useNavigate();

	const back = () => {
		nav('/registration/' + (activeStep - 1));
	};

	const next = () => {
		nav('/registration/' + (activeStep + 1));
	};

	return (
		<Container>
			<Stepper activeStep={activeStep}>
				{steps.map((step, index) => (
					<Step key={step} completed={activeStep > index + 1}>
						<StepLabel>{step}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Box
				display="flex"
				flexDirection={'column'}
				alignItems={'center'}
				gap={3}
			>
				<Grid
					container
					justifyContent="center"
					sx={{ margin: '70px', height: '270px' }}
				>
					<Card sx={{ width: '600px' }}>{children}</Card>
				</Grid>
				<Box display="flex" justifyContent={'space-between'} width="100%">
					<IconButton onClick={back} disabled={activeStep === 1}>
						<ArrowBack fontSize={'large'} />
					</IconButton>
					<IconButton onClick={next} disabled={activeStep >= steps.length}>
						<ArrowForward fontSize={'large'} />
					</IconButton>
				</Box>
			</Box>
		</Container>
	);
};

export default StepWrapper;
