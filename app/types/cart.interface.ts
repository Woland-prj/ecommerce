import { IProduct } from '@/types/product.interface'
import { IProductVariation } from './productVariation.interface'

interface ICartProduct
	extends Pick<IProduct, 'id' | 'name' | 'description' | 'variationTitle'> {}

export interface ICartItem {
	id: number
	product: ICartProduct
	quantity: number
	variation: IProductVariation
}
