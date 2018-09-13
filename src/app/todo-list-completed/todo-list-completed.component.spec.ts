/* tslint:disable:no-unused-variable */
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoItemComponent } from '@app/shared/todo-item/todo-item.component';
import { AddTodoComponent } from '@app/todo-list/add-todo/add-todo.component';
import { TodoListService } from '@app/todo-list/todo-list.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';
import { appRouterModule, completedTodoPath } from '../app.routes';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TODOItem } from '../shared/models/todo-item';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoListCompletedComponent } from './todo-list-completed.component';


describe('TodoListCompletedComponent', () => {
  let component: TodoListCompletedComponent;
  let fixture: ComponentFixture<TodoListCompletedComponent>;

  beforeEach(async(() => {

    const todo1 = new TODOItem('Buy milk', 'Remember to buy milk');
    todo1.completed = true;
    const todoList = [
      todo1,
      new TODOItem('Buy flowers', 'Remember to buy flowers'),
    ];

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        TodoListComponent,
        TodoItemComponent,
        FooterComponent,
        AddTodoComponent,
        TodoListCompletedComponent,
      ],
      imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        appRouterModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: completedTodoPath },
        {
          provide: TodoListService,
          useValue: {
            todoList: todoList
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
