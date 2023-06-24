import { Container } from '@mui/material'
import MessagePreImages from '../entites/Messages/MessagePreImages'
import MessageInput from '../entites/Messages/MessageInput'
import { useState } from 'react';

const MessageTextField = () => {
    const [files, setFiles] = useState<File[]>([]);

    return (
        <Container>
            <MessagePreImages images={files}/>
            <MessageInput setFiles={setFiles}/>
        </Container>
    )
}

export default MessageTextField