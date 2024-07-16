import { Box, Button, Container, CssBaseline } from '@mui/material';

export default function Home() {
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
				<Box>タスク一覧</Box>
			</Box>
		</Container>
	);
}
