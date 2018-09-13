import { NgModule } from '@angular/core';
import { TodoListActions } from '@app/todo-list/redux-api/todo-list.actions';
import { TodoListSelector } from '@app/todo-list/redux-api/todo-list.selector';
import { TodoListService } from '@app/todo-list/todo-list.service';

@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [TodoListService, TodoListSelector, TodoListActions]
})
export class CoreModule { }
