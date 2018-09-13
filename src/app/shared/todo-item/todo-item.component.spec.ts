/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoItemComponent } from './todo-item.component';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { FooterComponent } from '../footer/footer.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoListCompletedComponent } from '../todo-list-completed/todo-list-completed.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { appRouterModule, rootPath } from '../app.routes';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { TodoListService } from '../core/todo-list.service';
import { TODOItem } from '../shared/models/todo-item';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async(() => {
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
        {provide: APP_BASE_HREF, useValue : rootPath },
        {
          provide: TodoListService,
          useValue: {todoList: [new TODOItem('Buy milk', 'Remember to buy milk')]}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
