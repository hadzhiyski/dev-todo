import { Component, OnInit } from '@angular/core';
import { RxCleanupComponent } from '@devtodo/shared/components';
import { TodoService } from '@devtodo/todo/store';
import { Observable } from 'rxjs';
import { ITodo, ITodoState } from '@devtodo/todo/store/models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-index',
  templateUrl: './todo-index.component.html',
  styleUrls: ['./todo-index.component.scss']
})
export class TodoIndexComponent extends RxCleanupComponent implements OnInit {

  loading$: Observable<boolean>;
  todos$: Observable<ITodo[]>;

  constructor(private service: TodoService, private store: Store<ITodoState>) {
    super();
    this.loading$ = this.store.select(state => state.loading);
    this.todos$ = this.store.select(state => state.todos);
  }

  ngOnInit() {
    this.service.loadTodos();
  }
}
