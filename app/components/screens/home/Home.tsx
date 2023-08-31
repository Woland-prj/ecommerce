import { FC } from 'react'

import Layout from '@/layout/Layout'
import Catalog from '@/ui/catalog/Catalog'
import { products } from '@/data/products.data'

const Home: FC = () => {
	return (
		<Layout
			title='Umbrella Shop'
			description='The best shop of Umbrella academy in the world'
		>
			<Catalog products={products} />
		</Layout>
	)
}

export default Home
