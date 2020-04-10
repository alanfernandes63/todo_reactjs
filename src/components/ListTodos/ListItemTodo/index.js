import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { serviceDelete, put } from '../../../service/requests';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { REMOVE_TODO, DONE_TODOS, ACTIVES_TODOS } from '../../../Actions/Todos';
import { useDispatch, useSelector } from 'react-redux';

function ListItemTodo({todo}){

    const [id] = useState(todo.id);
    const [isDone, setIsDone] = useState(todo.done);
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    const todosType = store.TodosType;

    useEffect(()=>{
    },[]);

    async function deleteTodo(){
        const response = await serviceDelete(id);
        const todo = await response.json();
        dispatch({type:REMOVE_TODO, todo})
    }

    async function doneTodo(){
        const response = await put(id, !isDone);
        const todo = await response.json();
        if(response.ok){
            if(todo.done && todosType.type === ACTIVES_TODOS){
                dispatch({type:REMOVE_TODO, todo});
            }
            else if(!todo.done && todosType.type === DONE_TODOS){
                dispatch({type:REMOVE_TODO, todo});
            }
            else{
                setIsDone(todo.done);
            }
        }
    }

    return(
        <ListItem>
            <Grid container>
                <Grid item xs={3} sm={2} md={2}>
                    <Avatar onClick={doneTodo}>
                        { isDone ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon /> }
                    </Avatar>
                </Grid>
                <Grid item xs={7} sm={8} md={8}>
                    <ListItemText key={todo.id} primary={todo.name}/>
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