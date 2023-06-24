import { AttachFile, Send } from '@mui/icons-material';
import { Divider, IconButton, Paper, TextField } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';

type MessageInputProps = {
    setFiles: Dispatch<SetStateAction<File[]>>
}

const MessageInput = ({setFiles}: MessageInputProps) => {
	const [text, setText] = useState<string>('');
	const fileRef = useRef<HTMLInputElement | null>(null);

	const pushFile = (e: ChangeEvent<HTMLInputElement>) => {
		setFiles((prev) => [...prev, e.target.files[0]]);
	};

	return (
		<Paper
			sx={{
				p: '2px 4px',
				display: 'flex',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<input
				type="file"
				style={{ display: 'none' }}
				ref={fileRef}
				onChange={pushFile}
			/>
			<IconButton onClick={() => fileRef.current?.click()}>
				<AttachFile />
			</IconButton>
			<TextField
				fullWidth
				multiline
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<Divider />
			<IconButton>
				<Send />
			</IconButton>
		</Paper>
	);
};

export default MessageInput;
