import { Injectable } from '@angular/core';
import { ITodoState } from './models';
import { Store } from '@ngrx/store';
import * as TodoIndexActions from './actions/todo-index.actions';

@Injectable()
export class TodoService {

  constructor(private store: Store<ITodoState>) {}

  loadTodos(): void {
    this.store.dispatch(TodoIndexActions.loadTodos());
  }
}
