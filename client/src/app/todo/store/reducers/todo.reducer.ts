import { Action, createReducer, on } from '@ngrx/store';
import * as TodoIndexActions from '../actions/todo-index.actions';
import { ITodoState, ITodo } from '../models';

export const todoFeatureKey = 'todo';

export const initialState: ITodoState = {
  loading: false,
  error: null,
  todos: new Array<ITodo>()
};

const todoReducer = createReducer(
  initialState,
  on(TodoIndexActions.loadTodos, state => {
    return {
      ...state,
      loading: true,
      error: null
    };
  }),
  on(TodoIndexActions.loadTodosSuccess, (state, action) => ({
    ...state,
    todos: action.data,
    loading: false,
  })),
  on(TodoIndexActions.loadTodosFailure, (state, action) => {
    return {
      ...state,
      error: action.error.message,
      loading: false
    };
  }),

);

export function reducer(state: ITodoState | undefined, action: Action) {
  return todoReducer(state, action);
}
