import { AuthContext } from '@/contexts/firebaseProvider';
import {
	Alert,
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	Snackbar,
	TextField,
	Typography,
} from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

import { getApp } from '@/libs/firebase';
import type { FirebaseError } from 'firebase/app';

export default function Home() {
	const [error, setError] = useState('');
	const router = useRouter();

	const { setUser } = useContext(AuthContext);

	const app = getApp();

	if (!app) {
		return <div>Loading...</div>;
	}
	const auth = getAuth(app);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setUser(userCredential);
				router.push('/task');
			})
			.catch((error: FirebaseError) => {
				if (error.code === 'auth/invalid-email') {
					setError('メールアドレスまたはパスワードが無効です。');
				} else {
					setError('ログインに失敗しました。');
				}
			});
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleClose = () => {
		setError('');
	};

	return (
		<Container component="main" maxWidth="xs">
			<Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
				<Alert severity="error" onClose={handleClose}>
					{error}
				</Alert>
			</Snackbar>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component="h1" variant="h5">
					ログイン
				</Typography>
				<Box>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={handleEmailChange}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handlePasswordChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="ログイン情報を記憶する"
					/>
					<Button
						type="button"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={handleLogin}
					>
						ログイン
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#">パスワードを忘れた場合</Link>
						</Grid>
						<Grid item>
							<Link href="/register">新規登録はこちら</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
