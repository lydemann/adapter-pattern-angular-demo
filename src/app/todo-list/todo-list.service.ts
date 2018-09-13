import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListActions } from './redux-api/todo-list.actions';

@Injectable()
export class TodoListService {

    private todoListUrl = '//localhost:8080/todo-list';

    constructor(httpClient: HttpClient, todoListActions: TodoListActions) {
        httpClient.get<Array<TODOItem>>(this.todoListUrl).subscribe(data => {

            todoListActions.todoItemsLoaded(data);
        });
    }
}
