import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';

export type callMode = 'audio' | 'video'

interface State {
    current_user: IUser | null
    mode: callMode
    partnerMode: callMode
}

const initialState: State = {
    current_user: null,
    mode: 'audio',
    partnerMode: 'audio'
} 




const ChatSlice = createSlice({
    name: 'chat', 
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<IUser>) => {
            state.current_user = action.payload
        },
        setMode: (state, action: PayloadAction<callMode>) => {
            state.mode = action.payload
        },
        setPartnerMode: (state, action: PayloadAction<callMode>) => {
            state.partnerMode = action.payload
        },
    }
})

export default ChatSlice.reducer

export const {setCurrentUser, setMode, setPartnerMode} = ChatSlice.actions