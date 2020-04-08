import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { get } from '../../../service/requests';
import  { useDispatch } from 'react-redux';
import 
{ 
  ADD_TODO,
  REMOVE_ALL_TODOS,
  ACTIVES_TODOS,
  ALL_TODOS,
  DONE_TODOS
} from '../../../Actions/Todos';

function BottomList(){
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  async function loadTodos(){
    const response = await get("?type=all");
    const data = await response.json();
    dispatch({type:REMOVE_ALL_TODOS});
    addTodo(data);

  }

  async function loadTodosDone(){
    const response = await get("?type=done");
    const data = await response.json();
    dispatch({type:REMOVE_ALL_TODOS})
    addTodo(data);
  }

  async function loadTodosActive(){
    const response = await get("?type=active");
    const data = await response.json();
    dispatch({type:REMOVE_ALL_TODOS})
    addTodo(data);
  }

  function addTodo(todos){
    todos.map(todo => dispatch({type:ADD_TODO, todo:todo}));
  }

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    switch(newValue){
      case 2:
          dispatch({type:ACTIVES_TODOS});
          await loadTodosActive();
          break;
      case 1:
        dispatch({type:DONE_TODOS});
        await loadTodosDone();
        break;
      default:
          dispatch({type:ALL_TODOS});
          await loadTodos();
        break
    }
  }

    return (
      <>
        <BottomNavigation value={value} onChange={ handleChange } showLabels>
            <BottomNavigationAction label="Todas" icon={<FormatListNumberedIcon />} />
            <BottomNavigationAction label="Feitas" icon={<CheckCircleIcon/>}/>
            <BottomNavigationAction label="Pendentes" icon={<RadioButtonUncheckedIcon />} />
        </BottomNavigation>
      </>
    );        
}

export default BottomList;
