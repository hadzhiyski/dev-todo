import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ITodoResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class TodoApi {
  load(): Observable<ITodoResponse[]> {
    return of([
      {
        id: 1,
        title: 'Walk the 🐕!',
        description: 'In the afternoon',
        createdOn: new Date(2020, 4, 1, 19, 30, 7),
        author: {
          id: 101,
          username: 'hadzhiyski'
        }
      }
    ]).pipe(delay(3000));
  }
}
