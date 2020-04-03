import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RxCleanupComponent } from '@devtodo/shared/components';
import { LayoutService } from '@devtodo/shared/services';
import { TodoService } from '@devtodo/todo/store';
import { ITodo } from '@devtodo/todo/store/models';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todo-index',
  templateUrl: './todo-index.component.html',
  styleUrls: ['./todo-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoIndexComponent extends RxCleanupComponent implements OnInit {
  todos$: Observable<ITodo[]>;
  isHandset$ = this.layout.isHandset$.pipe(takeUntil(this.componentDestroyed$));

  constructor(private service: TodoService, private layout: LayoutService) {
    super();

    this.service.loading$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => {
        this.layout.setLoading(value);
      });
    this.todos$ = this.service.todos$;
  }

  ngOnInit() {
    this.service.loadTodos();
  }
}
