import { ICartItem } from '@/types/cart.interface'
import { products } from './products.data'

export const testCart: ICartItem[] = [
	{
		id: 0,
		product: products[0],
		quantity: 1,
		variation: {
			name: 'black',
			price: 5,
			images: ['/images/cup.png']
		}
	},
	{
		id: 1,
		product: products[1],
		quantity: 1,
		variation: {
			name: 'm',
			price: 80,
			images: ['/images/hoodie.png']
		}
	}
]
