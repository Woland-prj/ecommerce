import { FC, PropsWithChildren } from 'react'
import { ISeo } from './meta/meta.interface'
import Meta from './meta/Meta'
import Header from './header/Header'
import styles from './Layout.module.scss'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<div className={styles.layout}>
				<main>
					<Header />
					<section className={styles.content}>{children}</section>
				</main>
			</div>
		</>
	)
}

export default Layout
