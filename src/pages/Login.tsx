import {Box, Container} from '@mui/material';
import Form from '../features/Form';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { useTranslation } from 'react-i18next';
import { setIsAuth } from '../app/store/slice/AuthSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate()
    const dispatch = useAppDispatch()
    const {t} = useTranslation()

    const submitHandler = () => {
        dispatch(setIsAuth(true))     
        nav('/')
    }

    return (
        <Box height={'90vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Container sx={{width: "600px"}}>
                <Form submitHandler={submitHandler} inputs={[
                    {
                        name: 'email', 
                        label: t('email'),
                        settings: {required: t('req'), },
                        type: 'email' 

                    },
                    {
                        label: t('password'),
                        name: "password",
                        settings: {required: t('req')},
                        type: 'password'
                    }
                ]}/>
            </Container>
        </Box>
    )
}

export default Login