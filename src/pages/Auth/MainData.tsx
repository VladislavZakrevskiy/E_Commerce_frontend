import { useNavigate } from 'react-router-dom';
import Form from '../../features/Form';
import { useAppDispatch } from '../../app/store/hooks';
import { setRegData } from '../../app/store/slice/AuthSlice';
import { useTranslation } from 'react-i18next';

export interface IMainData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

const MainData = () => {
	const nav = useNavigate();
	const {t} = useTranslation()
	const dispatch = useAppDispatch()

	const submitHandler = (data: IMainData) => {
		dispatch(setRegData(data))
		nav('/registration/2');
	};

	return (
		<Form
			inputs={[
				{
					name: 'firstName',
					label: t('first-name'),
					settings: {
						required: t('req'),
						pattern: /^[A-Za-z]+$/i,
					},
				},
				{
					name: 'lastName',
					label: t('last-name'),
					settings: {
						required: t('req'),
						pattern: /^[A-Za-z]+$/i,
					},
				},
				{
					name: 'email',
					label: t('email'),
					type: 'email',
					settings: {
						required: t('req'),
						pattern: /^\S+@\S+\.\S+$/,
					},
				},
				{
					name: 'password',
					label: t('password'),
					type: 'password',
					settings: {
						required: t('req'),
						minLength: 8,
						maxLength: 100,
					},
				},
			]}
			submitHandler={submitHandler}
		/>
	);
};

export default MainData;
