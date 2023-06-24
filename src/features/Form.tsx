import { FormControl, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import {  ReactNode } from 'react';
import FormInputWithError, { IFormInput } from '../shared/FormInputWithError';



interface IFormProps {
	inputs: IFormInput[];
	submitHandler: (data: any) => void;
	children?: ReactNode;
}

const Form = ({ inputs, submitHandler, children }: IFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();


	return (
		<FormControl
			sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}
			component={'form'}
			onSubmit={handleSubmit(submitHandler)}
		>
			{inputs.map((input) => (
				<FormInputWithError key={input.name} errors={errors} input={input} register={register}/>
			))}
			{children}
			<TextField type="submit" />
		</FormControl>
	);
};

export default Form;
