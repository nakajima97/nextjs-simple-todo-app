import { FirebaseProvider } from '@/contexts/firebaseProvider';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppCacheProvider>
			<FirebaseProvider>
				<Component {...pageProps} />
			</FirebaseProvider>
		</AppCacheProvider>
	);
}
