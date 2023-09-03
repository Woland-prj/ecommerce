import { IProductVariation } from './productVariation.interface'

export interface IProduct {
	id: number
	name: string
	description: string
	variationTitle: string
	variations: IProductVariation[]
	// TODO: review interface
	reviews: []
}
