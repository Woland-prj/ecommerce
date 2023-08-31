import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	IAddToCartPayload,
	IChangeQuantityPayload,
	IInitialState
} from './types'
import { testCart } from '@/data/cart.data'

const initialState: IInitialState = {
	items: testCart
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			const id = state.items.length
			state.items.push({ ...action.payload, id: id })
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(item => item.id !== action.payload.id)
		},
		changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
			const { id, type } = action.payload
			const item = state.items.find(item => item.id === id)
			if (item) type === 'plus' ? item.quantity++ : item.quantity--
		}
	}
})
