import { Box, Button, Container, CssBaseline } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();

	const handleLogin = () => {
		router.push('/task');
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
				<Box sx={{ mt: 1 }}>
					<Button onClick={handleLogin} variant="contained">
						ログイン
					</Button>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Link href="/register">または新規登録</Link>
				</Box>
			</Box>
		</Container>
	);
}
