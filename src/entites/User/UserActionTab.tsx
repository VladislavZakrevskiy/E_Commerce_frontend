import { Call, Message, PeopleAlt, PersonAdd } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

interface IUserActionTabProps {
	id: string;
	canCall: boolean;
	canMessage: boolean;
	isFriend: boolean;
}

const UserActionTab = ({
	id,
	canCall,
	canMessage,
	isFriend,
}: IUserActionTabProps) => {
	return (
		<Box display='flex' justifyContent={'flex-end'} gap={2}>
			{isFriend ? (
				<IconButton
					onClick={() => console.log('already friend')}
				>
					<PeopleAlt />
				</IconButton>
			) : (
				<IconButton
					onClick={() => console.log('add friend')}
				>
					<PersonAdd />
				</IconButton>
			)}
			<IconButton
				disabled={canMessage}
				onClick={() => console.log('message')}
			>
				<Message />
			</IconButton>
			<IconButton disabled={canCall} onClick={() => console.log('call')}>
				<Call />
			</IconButton>
		</Box>
	);
};

export default UserActionTab;
