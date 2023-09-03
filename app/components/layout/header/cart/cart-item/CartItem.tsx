import { ICartItem } from '@/types/cart.interface'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../Cart.module.scss'
import CartActions from './cart-actions/CartActions'
import { formatToCurrency } from '@/utils/format-to-currency'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.variation.images[0]}
				alt={item.variation.name}
				width={100}
				height={100}
			></Image>
			<div>
				<h3 className={styles.name}>{item.product.name}</h3>
				<div className={styles.info}>
					<span className={styles.price}>
						{formatToCurrency(item.variation.price)}
					</span>
					<span>
						{item.product.variationTitle}: {item.variation.name}
					</span>
				</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
