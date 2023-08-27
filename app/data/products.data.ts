import { IProduct } from '@/types/product.interface'

export const products: IProduct[] = [
	{
		id: 1,
		name: 'cup',
		description: "It's a cup",
		price: 123,
		reviews: [],
		images: ['/images/cup.jpg']
	},
	{
		id: 2,
		name: 'hoodie',
		description: "It's a hoodie",
		price: 456,
		reviews: [],
		images: ['/images/hoodie.jpg']
	}
]
