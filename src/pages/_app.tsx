import { FirebaseProvider } from '@/contexts/firebaseProvider';
import { CssBaseline } from '@mui/material'; // Import CSSBaseline from the appropriate package
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppCacheProvider>
			<FirebaseProvider>
				<CssBaseline />
				<Component {...pageProps} />
			</FirebaseProvider>
		</AppCacheProvider>
	);
}
