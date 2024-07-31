import { AuthContext } from '@/contexts/firebaseProvider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Alert,
	Avatar,
	Box,
	Button,
	Container,
	Grid,
	Snackbar,
	TextField,
	Typography,
} from '@mui/material';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { getApp } from '@/libs/firebase';
import type { FirebaseError } from 'firebase/app';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const { setUser } = useContext(AuthContext);

	const router = useRouter();

	const app = getApp();
	const auth = getAuth(app);

	// ログイン済みの場合はタスク一覧画面にリダイレクト
	const user = auth.currentUser;

	useEffect(() => {
    if (user) {
      router.push('/task');
    }
  }, [user]);

	const handleSubmit = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setUser(userCredential);
				router.push('/task');
			})
			.catch((error: FirebaseError) => {
				switch (error.code) {
					case 'auth/invalid-email':
						setError('メールアドレスが無効です。');
						break;
					case 'auth/missing-password':
						setError('パスワードが無効です。');
						break;
					case 'auth/email-already-in-use':
						setError('メールアドレスが既に使用されています。');
						break;
					default:
						setError('登録に失敗しました。');
						break;
				}
			});
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleClose = () => {
		setError('');
	};

	const canSubmit = email && password;

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
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					新規登録
				</Typography>
				<Box sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={handleEmailChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
								onChange={handlePasswordChange}
							/>
						</Grid>
					</Grid>
					<Button
						type="button"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={handleSubmit}
						disabled={!canSubmit}
					>
						登録する
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/">ログイン画面に戻る</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
