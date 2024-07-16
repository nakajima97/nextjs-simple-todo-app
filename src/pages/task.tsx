import DoneIcon from '@mui/icons-material/Done';
import {
	Button,
	Checkbox,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemText,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';

const tasks = [
	{ id: 1, title: '買い物に行く', description: 'スーパーに買い物に行く' },
	{ id: 2, title: 'レポートを書く', description: 'レポートを提出する' },
	{ id: 3, title: '会議の準備', description: '会議資料を作成する' },
];

const TaskList = () => {
	return (
		<Grid container spacing={2} p={2}>
			<Grid item xs={12}>
				<Typography variant="h4">タスク一覧</Typography>
			</Grid>
			<Grid item xs={12}>
				<List>
					{tasks.map((task) => (
						<ListItem key={task.id} sx={{ display: 'flex', gap: 2 }}>
							<IconButton aria-label="finish task">
								<DoneIcon />
							</IconButton>
							<ListItemText primary={task.title} secondary={task.description} />
						</ListItem>
					))}
				</List>
			</Grid>
			<Grid item xs={12}>
				<Button variant="contained">タスクを追加する</Button>
			</Grid>
		</Grid>
	);
};

export default TaskList;
