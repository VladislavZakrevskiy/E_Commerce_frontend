export const tags = [
	'For Home',
	'Technic',
	'Beauty',
	'Entertainment',
	'No Tag',
];

export type Tags =
	| 'For Home'
	| 'Technic'
	| 'Beauty'
	| 'Entertainment'
	| 'No Tag';

export interface IProduct {
	id: string;
	images: string[];
	name: string;
	seller_id: string;
	seller: string;
	description: string;
	price: string;
	tag: Tags;
	created_at: number;
	sales: number;
	rating: number;
}
