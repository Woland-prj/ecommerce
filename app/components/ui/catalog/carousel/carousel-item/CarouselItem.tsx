import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import cn from 'clsx'
import styles from '../Carousel.module.scss'
import CarouselButton from './carousel-button/CarouselButton'
import CarouselVariations from './carousel-variations/CarouselVariations'
import { IProductVariation } from '@/types/productVariation.interface'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface ICarouselItem {
	product: IProduct
	selectedItemId: number
	setSelectedItemId: Dispatch<SetStateAction<number>>
}

const CarouselItem: FC<ICarouselItem> = ({
	product,
	selectedItemId,
	setSelectedItemId
}) => {
	const [selectedVariation, setSelectedVariation] = useState<IProductVariation>(
		product.variations[0]
	)
	const isActive = product.id === selectedItemId

	return (
		<div className={cn(styles.item, { [styles.active]: isActive })}>
			<div className={styles.head}>
				{isActive && <ChevronLeftIcon color='brand.500' />}
				<Image
					alt={selectedVariation.name}
					src={selectedVariation.images[0]}
					width={200}
					height={200}
					className={styles.image}
				/>
				{isActive && <ChevronRightIcon color='brand.500' />}
			</div>
			<div className={styles.heading}>
				<div>{product.name}</div>
			</div>
			<div>
				{isActive ? (
					<>
						<CarouselVariations
							variationTitle={product.variationTitle}
							productVariations={product.variations}
							selectedVariation={selectedVariation}
							setSelectedVariation={setSelectedVariation}
						/>
						<CarouselButton product={product} variation={selectedVariation} />
					</>
				) : (
					<p className={styles.description}>{product.description}</p>
				)}
			</div>
		</div>
	)
}

export default CarouselItem
