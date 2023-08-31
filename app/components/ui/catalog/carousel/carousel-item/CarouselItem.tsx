import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC } from 'react'
import cn from 'clsx'
import styles from '../Carousel.module.scss'

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const isActive = product.id === 2

	return (
		<div className={cn(styles.item, { [styles.active]: isActive })}>
			<Image
				alt={product.name}
				src={product.images[0]}
				width={200}
				height={200}
				className={styles.image}
			/>
			<div className={styles.heading}>
				<div>{product.name}</div>
			</div>
			<div className={styles.description}>
				{!isActive && <p>{product.description}</p>}
			</div>
		</div>
	)
}

export default CarouselItem
