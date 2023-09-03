import { useActions } from '@/hooks/useActions'
import { ICartItem } from '@/types/cart.interface'
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'
import styles from '../../Cart.module.scss'
import { useCart } from '@/hooks/useCart'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const { removeFromCart, changeQuantity } = useActions()

	const { cart } = useCart()
	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className={styles['cart-actions']}>
			<HStack maxW={'95px'}>
				<Button
					{...dec}
					size={'xs'}
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					isDisabled={quantity === 1}
				>
					<MinusIcon></MinusIcon>
				</Button>
				<Input
					{...input}
					focusBorderColor='#C1121F'
					size={'xs'}
					_hover={{ cursor: 'default' }}
					value={quantity}
					readOnly
				/>
				<Button
					{...inc}
					size={'xs'}
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
					isDisabled={quantity === 99}
				>
					<AddIcon></AddIcon>
				</Button>
			</HStack>
			<Button size={'xs'} onClick={() => removeFromCart({ id: item.id })}>
				<DeleteIcon color={'#C1121F'}></DeleteIcon>
			</Button>
		</div>
	)
}

export default CartActions
