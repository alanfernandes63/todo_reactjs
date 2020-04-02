import { createStore } from 'redux';
import reducers from '../Reducers/ReducerTodos';

const store = createStore(reducers);
export default store;
