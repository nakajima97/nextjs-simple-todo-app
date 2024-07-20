import { AuthContext } from '@/contexts/firebaseProvider';
import { initializeFirebase } from '@/libs/firebase';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Avatar,
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useContext, useState } from 'react';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { setUser, app } = useContext(AuthContext);

  const router = useRouter()

	const handleSubmit = async () => {
		// TODO: サインアップの機能を実装する
		try {
			if (!app) {
				throw new Error('Firebase App not initialized');
			}
			const auth = getAuth(app);
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);
			setUser(userCredential);
			console.log('サインアップに成功しました');
      router.push('/task')
		} catch (error: unknown) {
			console.error('サインアップに失敗しました');
			console.error({ error });
		}
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
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
