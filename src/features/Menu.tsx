import { useState, KeyboardEvent, ReactNode } from 'react';
import Box from '@mui/material/Box';
import {
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
    SvgIconTypeMap,
} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Anchor } from '../app/store/slice/SettingsSlice';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector } from '../app/store/hooks';
import { AccountCircle, Forum, Logout, Settings, ShoppingBasket } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IListProps {
    name: string
    icon: ReactNode
    callback: () => void
}

export default function Menu() {
	const [state, setState] = useState(false);
	const {t} = useTranslation()
	const { menuSide } = useAppSelector((state) => state.SettingsSlice);
    const nav = useNavigate()

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as KeyboardEvent).key === 'Tab' ||
					(event as KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setState(open);
		};
    
    const MainList: IListProps[] = [
        {
            name: t('menu_products'),
            icon: <ShoppingBasket/>,
            callback() {
                nav('/')
            },
        },
        {
            name: t('menu_messages'),
            icon: <Forum/>,
            callback() {
                nav('/messages')
            },
        }
    ]

    const BottomList: IListProps[] = [
        {
            name: t('menu_account'),
            icon: <AccountCircle/>,
            callback() {
                nav('/account')
            },
        },
        {
            name: t('menu_settings'),
            icon: <Settings/>,
            callback() {
                nav('/settings')
            },
        },
        {
            name: t('menu_leave'),
            icon: <Logout/>,
            callback() {
                nav('/login')
            },
        }
    ]

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{MainList.map(({icon, name, callback}) => (
					<ListItem key={name} disablePadding>
						<ListItemButton onClick={callback}>
							<ListItemIcon>
                                {icon}
							</ListItemIcon>
							<ListItemText primary={name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{BottomList.map(({icon, name, callback}) => (
					<ListItem key={name} disablePadding>
						<ListItemButton onClick={callback}>
							<ListItemIcon>
								{icon}
							</ListItemIcon>
							<ListItemText primary={name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<IconButton
				onClick={toggleDrawer(true)}
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{ mr: 2 }}
			>
				<MenuIcon />
			</IconButton>
			<Drawer anchor={menuSide} open={state} onClose={toggleDrawer(false)}>
				{list(menuSide)}
			</Drawer>
		</>
	);
}
