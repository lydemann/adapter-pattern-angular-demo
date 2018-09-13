import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AppState } from '@app/store/state.model';
import { select } from '@angular-redux/store';
import { TODOItem } from '@app/shared/models/todo-item';

export const todoListSelector = (appState: AppState) => appState.todoList.todos;

@Injectable()
export class TodoListSelector {

    @select(todoListSelector) todoList$: Observable<TODOItem[]>;
}
