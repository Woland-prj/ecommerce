import { ICartItem } from '@/types/cart.interface'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../Cart.module.scss'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				alt={item.product.name}
				width={100}
				height={100}
			></Image>
			<div>
				<h3 className={styles.name}>{item.product.name}</h3>
				<span className={styles.price}>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(item.product.price)}
				</span>
			</div>
		</div>
	)
}

export default CartItem
