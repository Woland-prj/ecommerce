import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { FC } from 'react'
import styles from '../../Cart.module.scss'
import { useDispatch } from 'react-redux'
import { cartSlice } from '@/store/slice'
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

	const { removeFromCart } = useActions()

	return (
		<div className={styles['cart-actions']}>
			<HStack maxW={'95px'}>
				<Button {...dec} size={'xs'}>
					<MinusIcon></MinusIcon>
				</Button>
				<Input {...input} focusBorderColor='#C1121F' size={'xs'} />
				<Button {...inc} size={'xs'}>
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
