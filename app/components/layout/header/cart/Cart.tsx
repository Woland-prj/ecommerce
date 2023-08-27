import { FC } from 'react'
import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { ICartItem } from '@/types/cart.interface'

const testItem: ICartItem = {
	id: 1,
	product: {
		id: 1,
		name: 'cup',
		description: 'It is cup',
		price: 123,
		reviews: [],
		images: []
	},
	quantity: 4
}

const Cart: FC = () => {
	return (
		<div className={styles['wrapper-cart']}>
			<div className={styles.heading}>
				<span className={styles.badge}>1</span>
				<span className={styles.text}>my basket</span>
			</div>
			<div className={styles.cart}>
				<CartItem item={testItem} />
			</div>
		</div>
	)
}

export default Cart
