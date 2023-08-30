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
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { formatToCurrency } from '@/utils/format-to-currency'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const cart = useTypedSelector(state => state.cart.items)

	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0
	)

	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => setIsOpen(!isOpen)}
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
							{cart.map(item => (
								<CartItem key={item.id} item={item} />
							))}
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
