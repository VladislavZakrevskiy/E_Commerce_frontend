import { List } from '@mui/material';
import { useState } from 'react';
import { IMenu } from '../models/IMenu';
import MenuItem from '../entites/Messages/MenuItem';
import { IUser } from '../models/IUser';

const MenuList = () => {
	const [menus] = useState<IUser[]>([
		{
			firstName: 'Vlad',
			id: '1',
			lastName: 'zakr',
			photo: '../../public/avatar.jpg',
			settings: {
				isFriend: true,
				permissions: {
					canCall: true,
					canMessage: true
				}
			}
		},
        {
			firstName: 'Vlad',
			id: '2',
			lastName: 'zakr',
			photo: '../../public/avatar.jpg',
			settings: {
				isFriend: true,
				permissions: {
					canCall: true,
					canMessage: true
				}
			}
		},
        {
			firstName: 'Vlad',
			id: '3',
			lastName: 'zakr',
			photo: '../../public/avatar.jpg',
			settings: {
				isFriend: true,
				permissions: {
					canCall: true,
					canMessage: true
				}
			}
		},
        {
			firstName: 'Vlad',
			id: '4',
			lastName: 'zakr',
			photo: '../../public/avatar.jpg',
			settings: {
				isFriend: true,
				permissions: {
					canCall: true,
					canMessage: true
				}
			}
		},
        {
			firstName: 'Vlad',
			id: '5',
			lastName: 'zakr',
			photo: '../../public/avatar.jpg',
			settings: {
				isFriend: true,
				permissions: {
					canCall: true,
					canMessage: true
				}
			}
		},
	]);

	return ( 
		<List
			sx={{
				display: 'flex',
				flexDirection: 'column',
				overflowY: 'scroll',
				borderRight: '1px solid black'
			}}
		>
			{menus.map((menu) => (
				<MenuItem menu={menu} />
			))}
		</List>
	);
};

export default MenuList;
