import { AppState } from '@app/store/state.model';
import { TodoListReducers } from '@app/todo-list/redux-api/todo-list.reducers';
import { combineReducers, Reducer } from 'redux';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer: Reducer<AppState> = combineReducers({
  todoList: TodoListReducers,
});
