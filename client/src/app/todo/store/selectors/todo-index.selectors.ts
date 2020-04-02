import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../models';
import * as fromTodo from '../reducers/todo.reducer';

const selectTodoState = createFeatureSelector<TodoState>(
  fromTodo.todoFeatureKey
);

export const getActiveTodos = createSelector(selectTodoState, (state: TodoState) => state.todos);
export const getAreTodosLoading = createSelector(selectTodoState, (state: TodoState) => state.loading);
