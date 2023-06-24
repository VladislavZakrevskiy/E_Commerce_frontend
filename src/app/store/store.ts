import {configureStore, combineReducers} from '@reduxjs/toolkit'
import AuthSlice from './slice/AuthSlice';
import SettingsSlice from './slice/SettingsSlice';
import BasketSlice from './slice/BasketSlice';
import ChatSlice from './slice/ChatSlice';


const reducer = combineReducers({
    AuthSlice,
    SettingsSlice,
    BasketSlice,
    ChatSlice
})

export const store = configureStore({ 
    reducer, 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch