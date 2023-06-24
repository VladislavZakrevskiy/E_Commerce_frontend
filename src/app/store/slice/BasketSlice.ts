import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../models/IProduct';

interface State {
	products: {
		product: IProduct;
		number: number;
	}[];
	summa: number
}

const initialState: State = {
	products: [],
	summa: 0
};

const BasketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		pushToBasket: (state, action: PayloadAction<IProduct>) => {
			for (let i = 0; i < state.products.length; i++) {
				if (state.products[i].product.id === action.payload.id) {
					state.products[i].number += 1;
					return;
				}
			}
			state.products.push({ number: 1, product: action.payload });

			return;
		},
		
		deleteItem: (state, action: PayloadAction<string>) => {
			for (let i = 0; i < state.products.length; i++) {
				if (state.products[i].product.id === action.payload) {
					if(state.products[i].number > 1) {
						state.products[i].number -= 1
						return
					}
					
				}
			}
			
			state.products = state.products.filter(
				(a) => a.product.id !== action.payload
			);
			
			return
		},

		clearBasket: (state) => {
			state.products = []
		},

		countSum: (state, action: PayloadAction<number>) => {
			state.summa = 0
			const prod = state.products
			for(let i = 0; i < prod.length; i++) {
				state.summa += (+prod[i].product.price * prod[i].number)
			}
			state.summa -= action.payload
		}
	},
});

export default BasketSlice.reducer;

export const { pushToBasket, deleteItem, clearBasket, countSum } = BasketSlice.actions;
