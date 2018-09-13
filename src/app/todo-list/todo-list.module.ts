import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@app/shared/shared.module';
import { AddTodoComponent } from '@app/todo-list/add-todo/add-todo.component';
import { TodoListComponent } from '@app/todo-list/todo-list.component';


@NgModule({
  declarations: [
    AddTodoComponent,
    TodoListComponent
],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
})
export class TodoListModule { }
