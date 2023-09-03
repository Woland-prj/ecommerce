import { FC } from 'react'
import styles from '../../Carousel.module.scss'
import { Button } from '@chakra-ui/react'
import { IProduct } from '@/types/product.interface'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProductVariation } from '@/types/productVariation.interface'

interface ICarouselButton {
	product: IProduct
	variation: IProductVariation
}

const CarouselButton: FC<ICarouselButton> = ({ product, variation }) => {
	const { addToCart, changeQuantity } = useActions()
	const { cart } = useCart()
	const modifyCart = (
		product: IProduct,
		variation: IProductVariation
	): void => {
		const existedCartItem = cart.find(
			cartItem =>
				cartItem.product.id === product.id &&
				cartItem.variation.name === variation.name
		)
		existedCartItem
			? changeQuantity({ type: 'plus', id: existedCartItem.id })
			: addToCart({ product: product, quantity: 1, variation: variation })
	}

	return (
		<div className='flex justify-center'>
			<Button
				onClick={() => modifyCart(product, variation)}
				colorScheme='carmine'
				className={styles.button}
			>
				add to basket
			</Button>
		</div>
	)
}

export default CarouselButton
