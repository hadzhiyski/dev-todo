import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TodoIndexEffects } from './todo-index.effects';

describe('TodoIndexEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoIndexEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoIndexEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TodoIndexEffects>(TodoIndexEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
