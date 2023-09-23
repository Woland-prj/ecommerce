import { IProduct } from '@/types/product.interface'
import { IProductVariation } from '@/types/productVariation.interface'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { HStack } from '@chakra-ui/react'
import cn from 'clsx'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from '../Carousel.module.scss'
import CarouselButton from './carousel-button/CarouselButton'
import CarouselVariations from './carousel-variations/CarouselVariations'

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
		<div
			className={cn(styles.item, { [styles.active]: isActive })}
			onClick={() => setSelectedItemId(product.id)}
		>
			<div className={styles.head}>
				<HStack spacing={0}>
					{isActive && <ChevronLeftIcon color='brand.500' boxSize={10} />}
					<Image
						alt={selectedVariation.name}
						src={selectedVariation.images[0]}
						width={200}
						height={200}
						className={styles.image}
					/>
					{isActive && <ChevronRightIcon color='brand.500' boxSize={10} />}
				</HStack>
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
