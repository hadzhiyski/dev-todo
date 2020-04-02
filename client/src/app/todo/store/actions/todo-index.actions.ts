import { createAction, props } from '@ngrx/store';
import { ITodo } from '../models';

export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ data: ITodo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: Error }>()
);
