import { FC, useState } from 'react'
import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.search}>
			<input
				className={styles.search}
				onChange={e => setSearchTerm(e.target.value)}
				value={searchTerm}
				type='text'
				placeholder='SEARCH'
			/>
		</div>
	)
}

export default Search
