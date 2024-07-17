import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from '@mui/material';

type Props = {
	open: boolean;
	handleClose: () => void;
};

export const CreateTaskDialog = ({ open, handleClose }: Props) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{
				component: 'form',
				onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
					handleClose();
				},
			}}
		>
			<DialogTitle>タスクを追加する</DialogTitle>
			<DialogContent>
				<DialogContentText>
					追加するタスクの情報を入力してください
				</DialogContentText>
				<TextField
					autoFocus
					required
					margin="dense"
					id="name"
					name="name"
					label="タスク内容"
					type="text"
					fullWidth
					variant="standard"
				/>
				<TextField
					autoFocus
					margin="dense"
					id="description"
					name="email"
					label="詳細"
					type="text"
					fullWidth
					multiline
					variant="standard"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button type="submit">Subscribe</Button>
			</DialogActions>
		</Dialog>
	);
};
