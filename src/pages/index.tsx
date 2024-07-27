import {
	Box,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { AuthContext } from '@/contexts/firebaseProvider';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

import { getApp } from '@/libs/firebase';

export default function Home() {
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
		signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
			setUser(userCredential);
			router.push('/task');
		}).catch((error) => {
			console.error('ログインに失敗しました');
			console.error({ error });
		});
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	}

	return (
		<Container component="main" maxWidth="xs">
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
