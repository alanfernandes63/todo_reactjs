import React, { useState } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { post } from '../../../service/requests';
import useStyles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, DONE_TODOS } from '../../../Actions/Todos';

function HeaderList(){
    const classes = useStyles();
    const [name,setName] = useState('');
    const dispatch = useDispatch();
    const typeTodos = useSelector(state => state.TodosType.type);

    async function addTodo(e){
        e.preventDefault();
        const response = await post({ name:name, done:false } );
        const todo = await response.json();
        setName('');

        if(typeTodos !== DONE_TODOS && response.ok){
            dispatch({type:ADD_TODO,todo})
        }
    }
    
    return(
        <ListSubheader className={classes.listHeader}>
            Coisas para fazer
            <form onSubmit={ addTodo }>
                <Grid container>
                    <TextField value={name} onChange={ (e) => { setName(e.target.value)} } variant="outlined" fullWidth />
                    <Button type="submit" className={classes.button} fullWidth variant="contained" color="primary">Adicionar</Button>
                </Grid>
            </form>
            <Divider className={classes.divider}/>
        </ListSubheader>
    );
}

export default HeaderList;