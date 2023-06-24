import { Avatar, Container, Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { setCurrentUser } from '../../app/store/slice/ChatSlice';
import { IUser } from '../../models/IUser';

type MenuItemProps = {
	menu: IUser;
};

const MenuItem = ({ menu }: MenuItemProps) => {
	const { firstName, lastName, photo, id } = menu;
    const {current_user} = useAppSelector(state => state.ChatSlice)
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(setCurrentUser(menu))
    }

	return (
        <Container
            sx={{
                display: 'flex',
                borderTop: '1px solid black',
                p: '5px 15px',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: current_user?.id === id ? 'gray' : 'white',
                height: '10vh',
            }}
            onClick={handleClick}
        >
            <Avatar src={photo} alt={`${firstName} ${lastName}`} />
            <Typography>
                {firstName} {lastName}
            </Typography>
        </Container>
	);
};

export default MenuItem;
