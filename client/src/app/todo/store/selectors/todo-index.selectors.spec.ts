import * as fromTodo from '../reducers/todo.reducer';
import { selectTodoState } from './todo-index.selectors';

describe('Todo Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTodoState({
      [fromTodo.todoFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
