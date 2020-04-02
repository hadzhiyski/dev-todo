import { createFeatureSelector } from '@ngrx/store';
import { ITodoState } from '../models';
import * as fromTodo from '../reducers/todo.reducer';

export const selectTodoState = createFeatureSelector<ITodoState>(
  fromTodo.todoFeatureKey
);
