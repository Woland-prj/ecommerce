import { Dispatch, FC, SetStateAction } from 'react'
import cn from 'clsx'
import { IProductVariation } from '@/types/productVariation.interface'
import styles from '../../Carousel.module.scss'

interface ICarouselVariations {
	variationTitle: string
	productVariations: IProductVariation[]
	selectedVariation: IProductVariation
	setSelectedVariation: Dispatch<SetStateAction<IProductVariation>>
}

const CarouselVariations: FC<ICarouselVariations> = ({
	variationTitle,
	productVariations,
	selectedVariation,
	setSelectedVariation
}) => {
	return (
		<div className={styles.variations}>
			<div className={styles.heading}>{variationTitle}:</div>
			<div className={styles.buttons}>
				{productVariations.map(variation => (
					<button
						key={variation.name}
						className={cn({
							[styles.active]: selectedVariation.name === variation.name
						})}
						onClick={() => setSelectedVariation(variation)}
					>
						{variation.name}
					</button>
				))}
			</div>
		</div>
	)
}

export default CarouselVariations
