import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '../features/Menu';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/store/hooks';
import { useTranslation } from 'react-i18next';
import LanguageChanger from './LanguageChanger';
import Basket from './Basket';
import Search from '../entites/Search/Search';

export default function Header() {
	const nav = useNavigate();
	const { isAuth } = useAppSelector((state) => state.AuthSlice);

	const { t } = useTranslation();

	return (
		<Box sx={{ flexGrow: 1, height: '10vh'}}>
			<AppBar position="static">
				<Toolbar>
					{isAuth && <Menu />}
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
						onClick={() => nav('/customer/1')}
					>
						{t('name_site')}
					</Typography>
					{isAuth && <Search/>}
					{isAuth && <Basket/>}
					<LanguageChanger />
					{!isAuth ? (
						<Box display="flex" gap={2}>
							<Button color="inherit" onClick={() => nav('/login')}>
								{t('login')}
							</Button>
							<Button
								color="secondary"
								variant="contained"
								onClick={() => nav('/registration/1')}
							>
								{t('sign-up')}
							</Button>
						</Box>
					) : null}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
