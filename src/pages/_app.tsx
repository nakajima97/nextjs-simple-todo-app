import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import type { AppProps } from 'next/app';
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const app = initializeApp(firebaseConfig);
	}, []);

	return (
		<AppCacheProvider>
			<Component {...pageProps} />
		</AppCacheProvider>
	);
}
