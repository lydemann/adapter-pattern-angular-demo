import { TODOItem } from '@app/shared/models/todo-item';

export class TodoListState {
  constructor() {
      this.todos = [];
  }

  todos: TODOItem[];
}
