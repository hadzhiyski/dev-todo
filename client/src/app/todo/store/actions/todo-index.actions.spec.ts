import * as fromTodo from './todo-index.actions';

describe('loadTodos', () => {
  it('should return an action', () => {
    expect(fromTodo.loadTodos().type).toBe('[Todo] Load Todos');
  });
});
