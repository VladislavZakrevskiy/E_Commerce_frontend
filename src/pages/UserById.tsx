import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import UserActionTab from '../entites/User/UserActionTab';
import { IUser } from '../models/IUser';
import RecommendList from '../widgets/RecommendList';
import { useState } from 'react';
import { IProduct } from '../models/IProduct';
import UserDescription from '../widgets/UserDescription';

const UserById = () => {
	const { id } = useParams();
    const [products, setProducts] = useState<IProduct[]>([
		{
			id: '1',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 1',
			price: '100',
			description: 'desc 1',
			tag: 'For Home',
			created_at: 1234567898,
			rating: 5,
			sales: 12345,
			seller: 'Seller 1',
			seller_id: '1'
		},
		{
			id: '2',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 2',
			price: '1',
			description: 'desc 2',
			tag: 'Beauty',
			created_at: 2133134133,
			rating: 4,
			sales: 123,
			seller: 'Seller 1',
			seller_id: '1'
		},
		{
			id: '3',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 3',
			price: '33',
			description: 'desc 3',
			tag: 'Entertainment',
			created_at: 123433567898,
			rating: 3,
			sales: 422,
			seller: 'Seller 1',
			seller_id: '1'
		},
		{
			id: '4',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 4',
			price: '22',
			description: 'desc 4',
			tag: 'Beauty',
			created_at: 123567898,
			rating: 1,
			sales: 324,
			seller: 'Seller 2',
			seller_id: '2'
		},
		{
			id: '5',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 5',
			price: '55',
			description: 'desc 5',
			tag: 'For Home',
			created_at: 123412567898,
			rating: 2,
			sales: 234,
			seller: 'Seller 2',
			seller_id: '2'
		},
		{
			id: '6',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 6',
			price: '66',
			description: 'desc 6',
			tag: 'Entertainment',
			created_at: 1234543567898,
			rating: 3,
			sales: 124,
			seller: 'Seller 2',
			seller_id: '2'
		},
		{
			id: '7',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 7',
			price: '89',
			description: 'desc 7',
			tag: 'Beauty',
			created_at: 1234561237898,
			rating: 2,
			sales: 533,
			seller: 'Seller 2',
			seller_id: '2'
		},
		{
			id: '8',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 8',
			price: '100',
			description: 'desc 8',
			tag: 'Technic',
			created_at: 123456764898,
			rating: 1,
			sales: 64,
			seller: 'Seller 3',
			seller_id: '3'
		},
		{
			id: '9',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 9',
			price: '4',
			description: 'desc 9',
			tag: 'Technic',
			created_at: 123456731898,
			rating: 3,
			sales: 33333,
			seller: 'Seller 3',
			seller_id: '3'
		},
		{
			id: '10',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 10',
			price: '556',
			description: 'desc 10',
			tag: 'Beauty',
			created_at: 123456783298,
			rating: 5,
			sales: 4245,
			seller: 'Seller 3',
			seller_id: '3'
		},
		{
			id: '11',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 11',
			price: '123',
			description: 'desc 11',
			tag: 'Entertainment',
			created_at: 123456789428,
			rating: 1.5,
			sales: 24561,
			seller: 'Seller 3',
			seller_id: '3'
		},
		{
			id: '12',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 12',
			price: '424',
			description: 'desc 12',
			tag: 'Technic',
			created_at: 123456789853,
			rating: 4.3,
			sales: 463262,
			seller: 'Seller 3',
			seller_id: '3'
		},
		{
			id: '13',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 13',
			price: '214',
			description: 'desc 13',
			tag: 'For Home',
			created_at: 1234567898,
			rating: 1.8,
			sales: 64673,
			seller: 'Seller 4',
			seller_id: '4'
		},
		{
			id: '14',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 14',
			price: '13',
			description: 'desc 14',
			tag: 'Entertainment',
			created_at: 123456721898,
			rating: 3.4,
			sales: 64245,
			seller: 'Seller 4',
			seller_id: '4'
		},
		{
			id: '15',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 15',
			price: '43',
			description: 'desc 15',
			tag: 'Entertainment',
			created_at: 12343567898,
			rating: 2,
			sales: 6434,
			seller: 'Seller 4',
			seller_id: '4'
		},
		{
			id: '16',
			images: ['../../public/avatar.jpg', '../../public/нормик.jpg'],
			name: 'Name 16',
			price: '2345',
			description: 'desc 16',
			tag: 'Technic',
			created_at: 12341567898,
			rating: 5,
			sales: 64635,
			seller: 'Seller 4',
			seller_id: '4'
		},
	]);

	const user: IUser = {
		age: 18,
		city: 'Znamensk',
		country: 'Russia',
		email: 'zakrevskiyvlada@yandex.ru',
		firstName: 'vlad',
		house_number: 14,
		house_street: 'chernyachovskogo',
		lastName: 'zakrevskiy',
		photo: 'photo',
		preferences: ['Beauty', 'Entertainment'],
		settings: {
			isFriend: false,
			menuSide: 'left',
			permissions: {
				canCall: false,
				canEmailWatch: true,
				canGeoWatch: true,
				canMessage: true,
				canPersonalWatch: false,
				canHistorySee: false,
			},
		},
	};

	return (
		<Container>
			<UserActionTab
				isFriend={user.settings.isFriend}
				canCall={user.settings.permissions.canCall}
				canMessage={user.settings.permissions.canMessage}
				id={id!}
			/>
			<UserDescription user={user}/>
			<RecommendList products={products} title='history'/>
		</Container>
	);
};

export default UserById;
