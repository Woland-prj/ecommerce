import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC, useState } from 'react'
import cn from 'clsx'
import styles from '../Carousel.module.scss'
import CarouselButton from './carousel-button/CarouselButton'
import CarouselVariations from './carousel-variations/CarouselVariations'
import { IProductVariation } from '@/types/productVariation.interface'

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const [selectedVariation, setSelectedVariation] = useState<IProductVariation>(
		product.variations[0]
	)
	const isActive = product.id === 3

	return (
		<div className={cn(styles.item, { [styles.active]: isActive })}>
			<Image
				alt={selectedVariation.name}
				src={selectedVariation.images[0]}
				width={200}
				height={200}
				className={styles.image}
			/>
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
