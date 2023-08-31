import { FC } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/ui/chakra.config'
import '@/assets/globals.scss'
import { persistor, store } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ChakraProvider theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
