import { FC, useState } from 'react'
import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { cart } from '@/data/cart.data'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles['wrapper-cart']}>
			<button className={styles.heading} onClick={() => setIsOpen(!isOpen)}>
				<span className={styles.badge}>1</span>
				<span className={styles.text}>my basket</span>
			</button>
			{isOpen && (
				<div className={styles.cart}>
					{cart.map(item => (
						<CartItem key={item.id} item={item} />
					))}
				</div>
			)}
		</div>
	)
}

export default Cart
