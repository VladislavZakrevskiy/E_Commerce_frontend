import { Box, Grid, Typography, Rating } from '@mui/material';

interface ISellerStatProps {
	rating: number;
	amount_customers: number;
	sales: number;
}

const SellerStat = ({ amount_customers, rating, sales }: ISellerStatProps) => {
	return (
		<Box display={'flex'} flexDirection={'column'} gap={4} p={3}>
			<Typography variant="h2" fontWeight={700} textAlign={'center'}>
				About Seller
			</Typography>
			<Grid
				container
				display={'grid'}
				gridTemplateColumns={'1fr 1fr 1fr'}
				gridTemplateRows={'1fr 1fr'}
				gap={1}
			>
				<Typography fontWeight={600} variant="h4" textAlign={'center'}>
					Rating
				</Typography>
				<Typography fontWeight={600} variant="h4" textAlign={'center'}>
					Amount of Customers
				</Typography>
				<Typography fontWeight={600} variant="h4" textAlign={'center'}>
					Sales
				</Typography>
				<Box display='flex' justifyContent={'center'}>
					<Rating
						value={rating}
						readOnly
						precision={0.01}
					/>
				</Box>
				{/* <Typography variant="h5" textAlign={'center'}>
					{rating}
				</Typography> */}
				<Typography variant="h5" textAlign={'center'}>
					{amount_customers}
				</Typography>
				<Typography variant="h5" textAlign={'center'}>
					{sales}
				</Typography>
			</Grid>
		</Box>
	);
};

export default SellerStat;
