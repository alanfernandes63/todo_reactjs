import { combineReducers } from 'redux';

import
{
    ADD_TODO,
    REMOVE_ALL_TODOS,
    REMOVE_TODO,
    ACTIVES_TODOS,
    ALL_TODOS,
    DONE_TODOS

} from '../Actions/Todos';

function ReducerTodos(state={todos:[]}, action){
    switch(action.type){
        case ADD_TODO:
            return { ...state, todos:[...state.todos, action.todo]}
        case REMOVE_ALL_TODOS:
            return { ...state, todos:[]}
        case REMOVE_TODO:
            return { ...state , todos: state.todos.filter((todo) => todo.id !== action.todo.id)}
        default:
            return state;
    }
}

function TodosType(state={type:ALL_TODOS }, action){
    switch(action.type){
        case ALL_TODOS:
            return {type:action.type}
        case ACTIVES_TODOS:
            return {type:action.type}
        case DONE_TODOS:
            return {type:action.type}
        default:
            return state;
    }
}

export default combineReducers({TodosType, ReducerTodos});
