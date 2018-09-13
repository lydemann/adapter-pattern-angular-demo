import { Component } from '@angular/core';
import { TodoListSelector } from '@app/todo-list/redux-api/todo-list.selector';
import { TodoListService } from '@app/todo-list/todo-list.service';

@Component({
  selector: 'app-todo-list-completed',
  templateUrl: './todo-list-completed.component.html',
  styleUrls: ['./todo-list-completed.component.css']
})
export class TodoListCompletedComponent {

  constructor(private todoListService: TodoListService, public todoListSelector: TodoListSelector) { }

}
