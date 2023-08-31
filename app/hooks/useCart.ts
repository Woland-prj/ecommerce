import { useTypedSelector } from './useTypedSelector'

export const useCart = () => {
	const cart = useTypedSelector(state => state.cart.items)

	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0
	)

	return { cart, totalQuantity, totalPrice }
}
