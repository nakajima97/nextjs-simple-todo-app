import { Box, Container, CssBaseline, Button } from "@mui/material";

export default function Home() {
	return <Container component="main" maxWidth="xs">
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
			<Button variant="contained">ログイン</Button>
		</Box>
	</Box>
</Container>;
}
