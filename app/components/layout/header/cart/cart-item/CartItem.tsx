import { FC } from 'react'
import Image from 'next/image'
import styles from 'CartItem.module.scss'
import { ICartItem } from '@/types/cart.interface'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.CartItem}>
			<Image
				src={item.product.images[0]}
				alt={item.product.name}
				width={100}
				height={100}
			></Image>
			<div>
				<h3 className={styles.name}>{item.product.name}</h3>
				<span className={styles.price}>
					{new Intl.NumberFormat(undefined, {
						style: 'currency',
						currency: 'USD'
					}).format(item.product.price)}
				</span>
			</div>
		</div>
	)
}

export default CartItem
