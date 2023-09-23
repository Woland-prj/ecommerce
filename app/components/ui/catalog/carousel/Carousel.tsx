import { FC, useState } from 'react'
import CarouselItem from './carousel-item/CarouselItem'
import { IProduct } from '@/types/product.interface'
import styles from './Carousel.module.scss'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	const [selectedItemId, setSelectedItemId] = useState(1)

	return (
		<div className={styles.carousel}>
			{products.map(product => (
				<CarouselItem
					key={product.id}
					product={product}
					selectedItemId={selectedItemId}
					setSelectedItemId={setSelectedItemId}
				/>
			))}
		</div>
	)
}

export default Carousel
