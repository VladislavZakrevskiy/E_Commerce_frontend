import { CallEndRounded, MusicNote, Pause, VideoCall } from "@mui/icons-material"
import { Box, ButtonGroup, IconButton, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/store/hooks"
import { callMode, setMode } from "../../app/store/slice/ChatSlice"

const CallActions = () => {

    const {mode, partnerMode} = useAppSelector(state => state.ChatSlice)
    const dispatch = useAppDispatch()

    const changeMode = (mode: callMode) => {
        dispatch(setMode(mode))
    }

    return (
        <ButtonGroup>
            {
                mode === 'audio' ? 
                <IconButton onClick={() => changeMode('audio')}>
                    <MusicNote/>
                </IconButton> : 
                <IconButton onClick={() => changeMode('video')}>
                    <VideoCall/>
                </IconButton>
            }
            <IconButton>
                <Pause/>
            </IconButton>
            <IconButton>
                <CallEndRounded/>
            </IconButton>
            <Box>
                <Typography>Partner mode: </Typography>
                {
                    partnerMode === 'audio' ? 
                    <MusicNote/> : <VideoCall/>
                }
            </Box>
        </ButtonGroup>
    )
}

export default CallActions