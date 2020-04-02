import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIndexComponent } from './todo-index.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TodoIndexComponent', () => {
  let component: TodoIndexComponent;
  let fixture: ComponentFixture<TodoIndexComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TodoIndexComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoIndexComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
