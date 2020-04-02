import React, { useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './style';
import ListItemTodo from './ListItemTodo/index';
import { get } from '../../service/requests';
import HeaderList from './HeaderList/index';
import BottomList from './BottomList/index';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO } from '../../Actions/Todos';

function ListTodos(){
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    const todos = store.ReducerTodos.todos;

    useEffect(() => {
     async function loadTodos(){
        const response = await get();
        const data = await response.json();
        data.map((todo) => dispatch({type:ADD_TODO, todo}));
        setLoading(false);
    }
    loadTodos();
    },[dispatch]);

    return(
        <>
        <List subheader={<HeaderList />} className={classes.root}>
            {
                todos.map((todo) => (<ListItemTodo key={todo.id} todo={todo} />))
            }
            {   
                loading && <Grid container justify="center"> <CircularProgress /> </Grid> 
            }
        </List>
        <BottomList />
        </>
    );
}

export default ListTodos;
