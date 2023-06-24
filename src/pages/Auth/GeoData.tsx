import { useNavigate } from 'react-router-dom';
import Form from '../../features/Form';
import { useAppDispatch } from '../../app/store/hooks';
import { setRegData } from '../../app/store/slice/AuthSlice';
import { useTranslation } from 'react-i18next';

export interface IGeoData {
	house_number: number;
	house_street: string;
	city: string;
	country: string;
}

const GeoData = () => {
	const nav = useNavigate();
	const dispatch = useAppDispatch()
	const {t} = useTranslation()

	const submitHandler = (data: IGeoData) => {
		dispatch(setRegData(data))
		nav('/registration/1');
	};

	return (
		<Form
			inputs={[
				{
					name: 'house_number',
					label: t('number-of-house'),
					type: 'number',
					settings: { required: t('req') },
				},
				{
					name: 'house_street',
					label: t('house_street'),
					settings: { required: t('req') },
				},
				{
					name: 'city',
					label: t('city'),
					settings: { required: t('req') },
				},
				{
					name: 'country',
					label: t('country'),
					settings: { required: t('req') },
				},
			]}
			submitHandler={submitHandler}
		/>
	);
};

export default GeoData;
