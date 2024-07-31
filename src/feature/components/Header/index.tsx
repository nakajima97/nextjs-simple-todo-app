import useFirebase from '@/hooks/useFirebase';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

type Props = {
	title: string;
};

const Header = ({ title }: Props) => {
	const { auth } = useFirebase();
	const router = useRouter();

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				router.push('/');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{title}
					</Typography>
					<Button color="inherit" onClick={handleLogout}>
						ログアウト
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export { Header };
