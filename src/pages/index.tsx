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

export default function Home() {
	const router = useRouter();

	const handleLogin = () => {
		router.push('/task');
	};

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
