import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { serviceDelete } from '../../../service/requests';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

function ListItemTodo(props){

    const [id, setId] = useState(props.todoId);
    const [isDone, setIsDone] = useState(props.isDone);

    async function deleteTodo(){
        const response = await serviceDelete(id);
        const todo = await response.json();
        removeTodo(todo);
    }

    function removeTodo(todoDeleted){
        props.todos.setTodo(props.todos.todos.filter( todo => parseInt(todoDeleted.id) !== todo.id))
    }

    return(
        <ListItem>
            <Grid container>
                <Grid item xs={3} sm={2} md={2}>
                    <Avatar>
                        { isDone ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon /> }
                    </Avatar>
                </Grid>
                <Grid item xs={7} sm={8} md={8}>
                    <ListItemText key={props.todoId} primary={props.todoName}/>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <IconButton onClick={ deleteTodo }>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    );
}

export default ListItemTodo;