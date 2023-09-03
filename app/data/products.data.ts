import { IProduct } from '@/types/product.interface'

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Cup Umbrella',
		description: "It's a cup",
		variationTitle: 'colors',
		reviews: [],
		variations: [
			{
				name: 'red',
				price: 5,
				images: ['/images/cup.png']
			},
			{
				name: 'black',
				price: 5,
				images: ['/images/cup.png']
			},
			{
				name: 'white',
				price: 5,
				images: ['/images/cup.png']
			},
			{
				name: 'blue',
				price: 5,
				images: ['/images/cup.png']
			}
		]
	},
	{
		id: 2,
		name: 'Hoodie Umbrella',
		description: "It's a hoodie",
		variationTitle: 'Size',
		reviews: [],
		variations: [
			{
				name: 'xs',
				price: 70,
				images: ['/images/hoodie.png']
			},
			{
				name: 's',
				price: 75,
				images: ['/images/hoodie.png']
			},
			{
				name: 'm',
				price: 80,
				images: ['/images/hoodie.png']
			},
			{
				name: 'l',
				price: 85,
				images: ['/images/hoodie.png']
			},
			{
				name: 'xl',
				price: 90,
				images: ['/images/hoodie.png']
			}
		]
	},
	{
		id: 3,
		name: 'Funko Ben',
		description: "It's a funko Ben",
		variationTitle: 'Type',
		reviews: [],
		variations: [
			{
				name: 'simple',
				price: 54,
				images: ['/images/ben-funko.png']
			},
			{
				name: 'tentacles',
				price: 57,
				images: ['/images/ben-funco-tentacles.png']
			}
		]
	},
	{
		id: 4,
		name: 'Comics "Umbrella academy"',
		description: "It's a comics",
		variationTitle: 'Part',
		reviews: [],
		variations: [
			{
				name: 'part 1',
				price: 97,
				images: ['/images/comics.png']
			},
			{
				name: 'part 2',
				price: 120,
				images: ['/images/comics.png']
			},
			{
				name: 'part 3',
				price: 100,
				images: ['/images/comics.png']
			}
		]
	}
]
