import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMainData } from '../../../pages/Auth/MainData';
import { IPersonalData } from '../../../pages/Auth/PersonalData';
import { IGeoData } from '../../../pages/Auth/GeoData';
import { IUser } from '../../../models/IUser';

interface State {
	isAuth: boolean;
	userData: {
		main: IMainData | null;
		personal: IPersonalData | null;
		geo: IGeoData | null;
	};
	user: IUser | null
}

const initialState: State = {
	isAuth: false,
	userData: { geo: null, main: null, personal: null },
	user: null
};

function isGeoData(obj: any): obj is IGeoData {
	return obj.city !== undefined;
}

function isMainData(obj: any): obj is IMainData {
	return obj.firstName !== undefined;
}

function isPersonalData(obj: any): obj is IPersonalData {
	return obj.age !== undefined;
}

function isUser (obj: any): obj is IUser {
	return obj.email !== undefined
}

const AuthSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		setRegData: (
			state,
			action: PayloadAction<IGeoData | IMainData | IPersonalData>
		) => {
			if (isGeoData(action.payload)) {
				state.userData.geo = action.payload;
			}
			if (isMainData(action.payload)) {
				state.userData.main = action.payload;
			}
			if (isPersonalData(action.payload)) {
				state.userData.personal = action.payload;
			}
		},

        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },

		setUserId: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
		}
	},
});

export default AuthSlice.reducer;
export const { setRegData, setIsAuth, setUserId } = AuthSlice.actions;
