import { Card, CardContent, CardHeader } from '@mui/material';
import { IMessage } from '../../models/IMessage';
import MessageMedia from '../../shared/MessageMedia';
import { useAppSelector } from '../../app/store/hooks';
import { Typography } from '@mui/material';

type MessageItemProps = {
	message: IMessage;
};

const MessageItem = ({ message }: MessageItemProps) => {
	const { user } = useAppSelector((state) => state.AuthSlice);

	const {
		created_at,
		media,
		text,
		from_id,
		from_user: { firstName, lastName },
	} = message;

	return (
		<Card sx={{flexGrow: 1, height: 'max-content', alignSelf: user?.id === from_id ? 'flex-end' : 'flex-start' }}>
			<CardHeader>
				<Typography>{firstName} {lastName}</Typography>
			</CardHeader>
			<MessageMedia media={media!} />
			<CardContent>
				<Typography color={'HighlightText'} variant="body2">
					{new Date(created_at).toLocaleDateString()}
				</Typography>
				<Typography variant="h6">{text}</Typography>
			</CardContent>
		</Card>
	);
};

export default MessageItem;
