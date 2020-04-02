import { ITodo } from './todo.interfaces';
import { Nullable } from '@devtodo/shared';

export interface ITodoState {
  loading: boolean;
  error: Nullable<string>;
  todos: ITodo[];
}
