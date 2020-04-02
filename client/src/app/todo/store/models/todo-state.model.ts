import { ITodo } from './todo.interfaces';
import { Nullable } from '@devtodo/shared';

export interface TodoState {
  loading: boolean;
  error: Nullable<string>;
  todos: ITodo[];
}
