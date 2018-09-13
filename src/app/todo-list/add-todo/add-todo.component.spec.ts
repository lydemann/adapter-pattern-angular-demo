import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddTodoComponent } from './add-todo.component';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FooterComponent } from '../footer/footer.component';
import { TodoListCompletedComponent } from '../todo-list-completed/todo-list-completed.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { appRouterModule } from '../app.routes';
import { APP_BASE_HREF } from '@angular/common';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

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
        CoreModule,
        HttpClientModule,
        appRouterModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
