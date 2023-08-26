import { FC, useState } from 'react'
import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.search}>
			<input
				onChange={e => setSearchTerm(e.target.value)}
				value={searchTerm}
				type='search'
				name='search'
				placeholder=' '
			/>
			<label htmlFor='search'>search</label>
		</div>
	)
}

export default Search
