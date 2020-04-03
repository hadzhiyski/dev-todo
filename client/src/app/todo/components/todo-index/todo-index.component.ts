import { Component, OnInit } from '@angular/core';
import { RxCleanupComponent } from '@devtodo/shared/components';
import { LayoutService } from '@devtodo/shared/services';
import { TodoService } from '@devtodo/todo/store';
import { ITodo } from '@devtodo/todo/store/models';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todo-index',
  templateUrl: './todo-index.component.html',
  styleUrls: ['./todo-index.component.scss']
})
export class TodoIndexComponent extends RxCleanupComponent implements OnInit {
  loading$: Observable<boolean>;
  todos$: Observable<ITodo[]>;
  isHandset$ = this.layout.isHandset$.pipe(takeUntil(this.componentDestroyed$));

  constructor(private service: TodoService, private layout: LayoutService) {
    super();

    this.loading$ = this.service.loading$;
    this.todos$ = this.service.todos$;
  }

  ngOnInit() {
    this.service.loadTodos();
  }
}
