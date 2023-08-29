import { IProduct } from '@/types/product.interface'

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Cup Umbrella',
		description: "It's a cup",
		price: 123,
		reviews: [],
		images: ['/images/cup.png']
	},
	{
		id: 2,
		name: 'Hoodie Umbrella',
		description: "It's a hoodie",
		price: 456,
		reviews: [],
		images: ['/images/hoodie.png']
	}
]
