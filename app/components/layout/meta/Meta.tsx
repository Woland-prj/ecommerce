import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { ISeo } from './meta.interface'
import { useRouter } from 'next/router'

const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	description,
	image = '/images/logo.png',
	children,
	type = 'website'
}) => {
	const asPath = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
					rel='stylesheet'
				/>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={description}
						/>
						<meta property='og:type' content={type} />
						<meta property='og:locale' content='en' />
						<meta property='og:title' content={title} />
						<meta property='og:url' content={currentUrl} />
						<meta property='og:image' content={image} />
						<meta property='og:description' content={description} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
