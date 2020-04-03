import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ITodoResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class TodoApi {
  load(): Observable<ITodoResponse[]> {
    const todos = ['🐕', '🐈', '🐟', '🐹', '🕷️', '🦎', '🐇'].map(
      (animal, index) => ({
        id: index,
        title: `Walk the ${animal}!`,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor sed consequatur illum eos mollitia amet recusandae accusantium! Consequuntur debitis placeat adipisci dolorum saepe aliquam assumenda itaque laborum facilis nemo.',
        createdOn: new Date(
          (Math.random() * 10000) % 2020,
          (Math.random() * 100) % 12,
          (Math.random() * 100) % 28,
          (Math.random() * 100) % 23,
          (Math.random() * 100) % 59,
          (Math.random() * 100) % 59
        ),
        author: {
          id: 101,
          username: 'hadzhiyski'
        }
      })
    );

    return of(todos).pipe(delay(1000));
  }
}
