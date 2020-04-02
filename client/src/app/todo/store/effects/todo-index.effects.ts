import { Injectable } from '@angular/core';
import { TodoApi } from '@devtodo/todo/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as TodoIndexActions from '../actions/todo-index.actions';

@Injectable()
export class TodoIndexEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoIndexActions.loadTodos),
      concatMap(() =>
        this.api.load().pipe(
          map(data => TodoIndexActions.loadTodosSuccess({ data })),
          catchError(error => of(TodoIndexActions.loadTodosFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private api: TodoApi) {}
}
