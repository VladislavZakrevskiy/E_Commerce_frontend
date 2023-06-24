import { Avatar, Box, Chip, Typography } from '@mui/material';
import { IUser } from '../models/IUser';

type UserDescriptionProps = {
	user: IUser;
};

const UserDescription = ({ user }: UserDescriptionProps) => {
	const {
		age,
		city,
		country,
		email,
		firstName,
		house_number,
		house_street,
		lastName,
		photo,
		preferences,
		settings: {
			permissions: { canEmailWatch, canGeoWatch, canPersonalWatch },
		},
	} = user;

	return (
		<Box p={3} display={'flex'} gap={4}>
			<Avatar sx={{ width: '200px', height: '200px' }} src={photo} />
			<Box display="flex" flexDirection={'column'}>
				<Typography variant="h2">
					{firstName} {lastName}. {canPersonalWatch && age}
				</Typography>
				<Box p={2} gap={1} display="flex" flexDirection={'column'}>
					{canEmailWatch && <Typography>{email}</Typography>}
					{canGeoWatch && (
						<>
							<Typography>
								{city} {country}
							</Typography>
							<Typography>
								{house_street} {house_number}
							</Typography>
						</>
					)}
					<Box display="flex" gap={1}>
						{preferences.map((preference) => (
							<Chip label={preference} key={preference} />
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default UserDescription;
