import React, { useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './style';
import ListItemTodo from './ListItemTodo/index';
import { get } from '../../service/requests';
import HeaderList from './HeaderList/index';
import BottomList from './BottomList/index';

function ListTodos(){
    const classes = useStyles();

    const [todos, setTodo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

    async function loadTodos(){
        
        const response = await get();
        const todosJson = await response.json();
        setTodo(todosJson);
        setLoading(false);
    }

    loadTodos();

    },[]);

    return(
        <>
        <List subheader={<HeaderList todos={ { todos, setTodo } }/>} className={classes.root}>

            {
                todos.map((todo) => (

                    <ListItemTodo todos={{todos,setTodo}} isDone={todo.done} key={todo.id} todoId={todo.id} todoName={todo.name}/>
                ))
            }

            {   loading && 
                <Grid container justify="center">
                <CircularProgress />
                </Grid> 
            }

        </List>

        <BottomList todos={ {todos, setTodo }}/>
        </>
    );
}

export default ListTodos;