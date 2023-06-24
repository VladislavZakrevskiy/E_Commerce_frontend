import {
	Button,
	FormControl,
	MenuItem,
	Select,
	TextField,
	InputLabel,
} from '@mui/material';
import { Tags, tags } from '../../models/IProduct';
import { useForm } from 'react-hook-form';
import FileUpload from '../../shared/Upload';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInputWithError from '../../shared/FormInputWithError';
import { useAppDispatch } from '../../app/store/hooks';
import { setRegData } from '../../app/store/slice/AuthSlice';
import MultiSelector from '../../shared/MultiSelector';
import { useTranslation } from 'react-i18next';

export interface IPersonalData {
	age: number;
	preferences: Tags[];
	role: 'customer' | 'seller';
	photo: File;
}

const PersonalData = () => {
	const nav = useNavigate();
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const [tagsSelector, setTagsSelector] = useState<string[]>([]);
	const dispatch = useAppDispatch();
	const {t} = useTranslation()

	const submitHandler = (data: IPersonalData) => {
		dispatch(setRegData(data));
		nav('/registration/3');
	};

	return (
		<FormControl
			sx={{ display: 'flex', flexDirection: 'column', gap: 2}}
			component={'form'}
			onSubmit={handleSubmit(submitHandler)}
		>
			<FormInputWithError
				register={register}
				errors={errors}
				input={{
					label: t('age'),
					name: 'age',
					settings: { required: t('req'), min: 18 },
					type: 'number',
				}}
			/>
			<MultiSelector
				data={tags}
				label={t('preferences')}
				name="preferences"
				setValue={setTagsSelector}
				setValueRegister={setValue}
				value={tagsSelector}
			/>
			<FormControl fullWidth component={'div'}>
				<InputLabel id="role-select">{t('role')}</InputLabel>
				<Select
					labelId="role-select"
					label={t('role')}
					multiline
					{...register('role')}
				>
					<MenuItem value={'customer'}>{t('customer')}</MenuItem>
					<MenuItem value={'seller'}>{t('seller')}</MenuItem>
				</Select>
			</FormControl>
			<FileUpload setValue={setValue}>
				<Button>{t('upload-your-photo')}</Button>
			</FileUpload>
			<TextField type="submit" />
		</FormControl>
	);
};

export default PersonalData;
