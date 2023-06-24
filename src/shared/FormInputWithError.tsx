import { Report } from "@mui/icons-material"
import { Box, TextField, Typography } from "@mui/material"
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister, FieldValues, RegisterOptions, FieldErrors } from 'react-hook-form';

export type IFormInput = {
	name: string;
	label: string;
	type?: HTMLInputTypeAttribute;
	settings?: RegisterOptions<FieldValues, ''> | undefined;
};

interface IFormInputWithErrorProps {
    errors: FieldErrors<FieldValues>
    input: IFormInput
    register: UseFormRegister<FieldValues>
}

const FormInputWithError = ({errors, input, register}: IFormInputWithErrorProps) => {
    return (
        <Box>
            <Typography p={0.5} variant="body2" fontSize={12} color={'red'}>
                {errors[input.name]?.message as string}
            </Typography>
            <Box display={'flex'} alignItems={'center'} gap={1}>
                {errors[input.name] ? <Report color="error" /> : null}
                <TextField
                    fullWidth
                    key={input.name}
                    label={input.label}
                    aria-invalid={errors[input.name] ? 'true' : 'false'}
                    type={input.type ? input.type : 'text'}
                    {...register(input.name, input.settings)}
                />
            </Box>
        </Box>
    )
}

export default FormInputWithError