import { cart } from '@/data/cart.data'
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

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)
	const cart = useTypedSelector(state => state.cart.items)

	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => setIsOpen(!isOpen)}
				ref={btnRef}
			>
				<span className={styles.badge}>2</span>
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
							<span>$579</span>
						</div>
						<Button colorScheme='red'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
