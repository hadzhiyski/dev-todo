import { Injectable } from '@angular/core';
import { TodoState } from './models';
import { Store } from '@ngrx/store';
import * as TodoIndexActions from './actions/todo-index.actions';
import { getActiveTodos, getAreTodosLoading } from './selectors/todo-index.selectors';

@Injectable()
export class TodoService {

  todos$ = this.store.select(getActiveTodos);
  loading$ = this.store.select(getAreTodosLoading);

  constructor(private store: Store<TodoState>) {}

  loadTodos(): void {
    this.store.dispatch(TodoIndexActions.loadTodos());
  }
}
