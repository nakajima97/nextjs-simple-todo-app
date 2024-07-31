import {
	AppBar,
	Box,
	Button,
	Toolbar,
	Typography,
} from '@mui/material';

type Props= {
  title: string;
}

const Header = ({ title }: Props) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{ title }
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export { Header };
