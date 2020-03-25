import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { get } from '../../../service/requests';

function BottomList(props){
  const [value, setValue] = useState(0);

  async function loadTodos(setTodos){
    const response = await get();
    const todosJson = await response.json();
    setTodos(todosJson);

  }

  async function loadTodosDone(setTodos){
    const response = await get();
    const todosJson = await response.json();
    setTodos(todosJson.filter(todo => todo.done === false));

  }

  async function loadTodosActive(setTodos){
    const response = await get();
    const todosJson = await response.json();
    setTodos(todosJson.filter(todo => todo.done === true));

  }



  const handleChange = async (event, newValue) => {
    setValue(newValue);
    switch(newValue){
      case 2:
          await loadTodosDone(props.todos.setTodo);
          break;
      case 1:
        await loadTodosActive(props.todos.setTodo);
        break;
      case 0:
          await loadTodos(props.todos.setTodo);
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
