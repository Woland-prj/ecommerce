import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { FC } from 'react'
import styles from '../../Cart.module.scss'
import { ICartItem } from '@/types/cart.interface'
import { useActions } from '@/hooks/useActions'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1,
			max: 99
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const { removeFromCart, changeQuantity } = useActions()

	return (
		<div className={styles['cart-actions']}>
			<HStack maxW={'95px'}>
				<Button
					{...dec}
					size={'xs'}
					onClick={() => {
						if (item.quantity > 1)
							changeQuantity({ id: item.id, type: 'minus' })
					}}
				>
					<MinusIcon></MinusIcon>
				</Button>
				<Input
					{...input}
					focusBorderColor='#C1121F'
					size={'xs'}
					_hover={{ cursor: 'default' }}
					readOnly
				/>
				<Button
					{...inc}
					size={'xs'}
					onClick={() => {
						if (item.quantity < 99)
							changeQuantity({ id: item.id, type: 'plus' })
					}}
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
