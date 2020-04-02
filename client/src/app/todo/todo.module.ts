import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoIndexComponent } from './components/todo-index/todo-index.component';
import { TodoService } from './store';
import { TodoIndexEffects } from './store/effects/todo-index.effects';
import * as fromTodo from './store/reducers/todo.reducer';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [TodoIndexComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoIndexEffects])
  ],
  providers: [TodoService]
})
export class TodoModule {}
