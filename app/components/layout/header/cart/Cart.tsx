import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'
import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { formatToCurrency } from '@/utils/format-to-currency'
import { useCart } from '@/hooks/useCart'
import { useActions } from '@/hooks/useActions'

import { testCart } from '@/data/cart.data'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const { cart, totalQuantity, totalPrice } = useCart()
	const { addToCart } = useActions()

	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => {
					setIsOpen(!isOpen)
					if (!cart.length) testCart.forEach(cartItem => addToCart(cartItem))
				}}
				ref={btnRef}
			>
				<span className={styles.badge}>{totalQuantity}</span>
				<span className={styles.text}>my basket</span>
			</button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>MY BASKET</DrawerHeader>
					<DrawerBody>
						<div className={styles.cart}>
							{cart.length ? (
								cart.map(item => <CartItem key={item.id} item={item} />)
							) : (
								<div>Basket is empty</div>
							)}
						</div>
					</DrawerBody>
					<DrawerFooter justifyContent={'space-between'}>
						<div className={styles.footer}>
							<span>Total: </span>
							<span>{formatToCurrency(totalPrice)}</span>
						</div>
						<Button colorScheme='red'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
