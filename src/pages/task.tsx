import React from 'react';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  TextField,
  Button,
} from '@mui/material';

const tasks = [
  { id: 1, title: '買い物に行く', completed: false },
  { id: 2, title: 'レポートを書く', completed: true },
  { id: 3, title: '会議の準備', completed: false },
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
            <ListItem key={task.id}>
              <Checkbox
                checked={task.completed}
                onChange={() => {}} // TODO: タスク完了状態の更新処理
              />
              <ListItemText
                primary={task.title}
                secondary={task.completed ? '完了' : '未完了'}
              />
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