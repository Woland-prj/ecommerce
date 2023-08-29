import { FC } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/ui/chakra.config'
import '@/assets/globals.scss'
import { store } from '@/store/store'

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	)
}

export default App
