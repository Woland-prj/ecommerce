import { ICartItem } from '@/types/cart.interface'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from '../Cart.module.scss'
import CartActions from './cart-actions/CartActions'
import { formatToCurrency } from '@/utils/format-to-currency'

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
					{formatToCurrency(item.product.price)}
				</span>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
