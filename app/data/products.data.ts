import { IProduct } from '@/types/product.interface'

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Cup Umbrella',
		description: "It's a cup",
		price: 10,
		reviews: [],
		images: ['/images/cup.png']
	},
	{
		id: 2,
		name: 'Hoodie Umbrella',
		description: "It's a hoodie",
		price: 200,
		reviews: [],
		images: ['/images/hoodie.png']
	},
	{
		id: 3,
		name: 'Ben Funko',
		description: "It's a funko Ben",
		price: 57,
		reviews: [],
		images: ['/images/ben-funko.png']
	},
	{
		id: 4,
		name: 'Comics "Umbrella academy"',
		description: "It's a comics",
		price: 120,
		reviews: [],
		images: ['/images/comics.png']
	}
]
