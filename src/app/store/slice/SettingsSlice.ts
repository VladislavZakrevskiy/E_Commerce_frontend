import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface IPermissions {
	canMessage: boolean;
	canCall: boolean;
	canGeoWatch: boolean;
	canPersonalWatch: boolean;
	canEmailWatch: boolean;
    canHistorySee: boolean
}

export interface ISettingsState {
	menuSide: Anchor;
	permissions: IPermissions;
	isFriend: boolean;
}

const initialState: ISettingsState = {
	menuSide: 'left',
	isFriend: false,
	permissions: {
		canCall: false,
		canEmailWatch: false,
		canGeoWatch: false,
		canMessage: false,
		canPersonalWatch: false,
        canHistorySee: false
	},
};

const SettingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setAllSettings: (state, action: PayloadAction<ISettingsState>) => {
			state = action.payload;
		},
		setIsFriend: (state, action: PayloadAction<boolean>) => {
			state.isFriend = action.payload;
		},
		setAllPermissions: (state, action: PayloadAction<IPermissions>) => {
			state.permissions = action.payload;
		},
		setSomePermissions: (
			state,
			action: PayloadAction<Partial<IPermissions>>
		) => {
            let permission: string
			for (permission in action.payload) {
				state.permissions[permission] = action.payload[permission];
			}
		},
	},
});

export default SettingsSlice.reducer;

export const {
	setAllSettings,
	setAllPermissions,
	setIsFriend,
	setSomePermissions,
} = SettingsSlice.actions;
