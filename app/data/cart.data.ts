import { ICartItem } from '@/types/cart.interface'
import { products } from './products.data'

export const cart: ICartItem[] = [
	{
		id: 1,
		product: products[0],
		quantity: 3
	},
	{
		id: 2,
		product: products[1],
		quantity: 5
	}
]
