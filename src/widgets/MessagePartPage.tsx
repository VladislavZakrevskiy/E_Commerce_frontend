import { Box, Grid, Typography } from '@mui/material'
import UserActionTab from '../entites/User/UserActionTab'
import MessagesList from '../features/MessagesList'
import MessageTextField from '../shared/MessageTextField'
import { useAppSelector } from '../app/store/hooks'

const MessagePartPage = () => {
    const {current_user} = useAppSelector(state => state.ChatSlice)

    if(!current_user) {
        return (
            <Grid
                container
                display={'grid'}
                gridTemplateColumns={'1fr'}
                gridTemplateRows={'1fr'}
            >
                <Box
                    sx={{
                        height: '90vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant='h2'>Empty</Typography>
                </Box>
            </Grid>
            
            )
    }

    return (
        <Grid
            container
            display={'grid'}
            gridTemplateColumns={'1fr'}
            gridTemplateRows={'10vh 70vh 10vh'}
        >
            <UserActionTab
                canCall={current_user.settings.permissions.canCall}
                canMessage={current_user.settings.permissions.canMessage}
                isFriend={current_user.settings.isFriend}
                id={current_user.id}
            />
            <MessagesList id={current_user.id} />
            <MessageTextField />
        </Grid>
    )
}

export default MessagePartPage