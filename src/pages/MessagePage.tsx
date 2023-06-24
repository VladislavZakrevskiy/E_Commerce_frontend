import { Grid } from '@mui/material';
import MenuList from '../features/MenuList';
import MessagePartPage from '../widgets/MessagePartPage';

const MessagePage = () => {

	return (
		<Grid
			container
			display={'grid'}
			gridTemplateColumns={'1fr 4fr'}
			gridTemplateRows={'1fr'}
		>
			<MenuList />
			<MessagePartPage/>
		</Grid>
	);
};

export default MessagePage;
