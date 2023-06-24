import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { IMessage } from '../models/IMessage';
import MessageItem from '../entites/Messages/MessageItem';

const MessagesList = ({ id }: { id: string }) => {
	const [messages] = useState<IMessage[]>([
		{
			chat_id: '1',
			created_at: 13324234,
			from_id: '1',
			from_user: { firstName: 'vlad', lastName: 'zakrevskiy' },
			id: '1',
			text: 'text 1',
			to_id: '2',
			media: [
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
			],
		},
		{
			chat_id: '1',
			created_at: 13324234,
			from_id: '1',
			from_user: { firstName: 'vlad', lastName: 'zakrevskiy' },
			id: '1',
			text: 'text 1',
			to_id: '2',
			media: [
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
			],
		},
		{
			chat_id: '1',
			created_at: 13324234,
			from_id: '1',
			from_user: { firstName: 'vlad', lastName: 'zakrevskiy' },
			id: '1',
			text: 'text 1',
			to_id: '2',
			media: [
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
			],
		},
		{
			chat_id: '1',
			created_at: 13324234,
			from_id: '1',
			from_user: { firstName: 'vlad', lastName: 'zakrevskiy' },
			id: '1',
			text: 'text 1',
			to_id: '2',
			media: [
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
			],
		},
		{
			chat_id: '1',
			created_at: 13324234,
			from_id: '1',
			from_user: { firstName: 'vlad', lastName: 'zakrevskiy' },
			id: '1',
			text: 'text 1',
			to_id: '2',
			media: [
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
			],
		},
		{
			chat_id: '1',
			created_at: 13324234,
			from_id: '1',
			from_user: { firstName: 'vlad', lastName: 'zakrevskiy' },
			id: '1',
			text: 'text 1',
			to_id: '2',
			media: [
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
				'../../public/avatar.jpg',
			],
		},
	]);

	useEffect(() => {
		// rtk-query
	}, [id])

	return (
		<Box
			display={'grid'}
			gridTemplateColumns={'1fr'}
			sx={{ overflowY: 'scroll' }}
		>
			{messages.map((message) => (
				<MessageItem message={message} />
			))}
		</Box>
	);
};

export default MessagesList;
