import { ICartItem } from '@/types/cart.interface'
import { products } from './products.data'

export const testCart: ICartItem[] = [
	{
		id: 0,
		product: products[0],
		quantity: 1
	},
	{
		id: 1,
		product: products[1],
		quantity: 1
	}
]
