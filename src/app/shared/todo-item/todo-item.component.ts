import { TODOItem } from './../models/todo-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() public todoItem: TODOItem;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter();
  @Output() public todoEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public completeClick() {
    this.todoItem.completed = !this.todoItem.completed;
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }
}
