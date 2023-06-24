import { IProduct } from './IProduct';
import { IUser } from './IUser';

interface IWarehouse {
	city: string;
	country: string;
	house_street: string;
	house_number: number;
	amount_procent: number;
	products: {
		product: IProduct;
		number: number;
	}[];
}

export interface ISeller extends IUser {
	sales: number;
	warehouses: IWarehouse[];
    products: IProduct[]
    amount_customer: number
    rating: number
}
