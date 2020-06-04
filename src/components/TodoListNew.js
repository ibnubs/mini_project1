import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import CreateIcon from '@material-ui/icons/Create';
import Paper from '@material-ui/core/Paper';



const TodoList = ({ item, onDelete }) => (

  <Paper elevation={3} style={{ margin: '10px 20px' }}>
    <List>
      <ListItem key={item.id.toString()} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={item.title} />
        <ListItemText primary={item.description} style={{textAlign:"left"}} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Important"
            onClick={() => { console.log('starticon') }}
            style={{outline:'none'}}
          >
            <StarIcon />
          </IconButton>
          <IconButton
            aria-label="EditTask"
            onClick={() => { console.log('editicon') }}
            style={{outline:'none'}}
          >
            <CreateIcon />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={onDelete}
            style={{outline:'none'}}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

    </List>
  </Paper>
);

export default TodoList;

