import { Action, createReducer, on } from '@ngrx/store';
import * as TodoIndexActions from '../actions/todo-index.actions';
import { TodoState, ITodo } from '../models';
import { Nullable } from '@devtodo/shared';

export const todoFeatureKey = 'todo';

export const initialState: TodoState = {
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
      error: null as Nullable<string>,
      asdf: 123
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
      loading: false,
    };
  }),

);

export function reducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}
