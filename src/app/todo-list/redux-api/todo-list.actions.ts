import { Injectable } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { GenericAction } from '@app/store/generic-action';
import { dispatch } from '@angular-redux/store';

export enum TodoListActionTypes {
    TodoItemsLoaded = 'TodoItemsLoaded',
    TodoItemCreated = 'TodoItemCreated',
    TodoItemDeleted = 'TodoItemDeleted',
    TodoItemUpdated = 'TodoItemUpdated',
    TodoItemCompleted = 'TodoItemCompleted',
}

@Injectable()
export class TodoListActions {
    constructor() {
    }

    @dispatch()
    public todoItemsLoaded(payload: TODOItem[]): GenericAction<TodoListActionTypes, TODOItem[]> {
        return {
            type: TodoListActionTypes.TodoItemsLoaded,
            payload: payload
        };
    }

    @dispatch()
    public todoItemCreated(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return {
            type: TodoListActionTypes.TodoItemCreated,
            payload: todoItem
        };
    }

    @dispatch()
    public todoItemDeleted(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return {
            type: TodoListActionTypes.TodoItemDeleted,
            payload: todoItem
        };
    }

    @dispatch()
    public todoItemUpdated(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return {
            type: TodoListActionTypes.TodoItemUpdated,
            payload: todoItem
        };
    }

    @dispatch()
    public todoItemCompleted(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return {
            type: TodoListActionTypes.TodoItemCompleted,
            payload: todoItem
        };
    }
}
