import { FC } from 'react'
import CarouselItem from './carousel-item/CarouselItem'
import { IProduct } from '@/types/product.interface'
import styles from './Carousel.module.scss'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.carousel}>
			{products.map(product => (
				<CarouselItem key={product.id} product={product} />
			))}
		</div>
	)
}

export default Carousel
