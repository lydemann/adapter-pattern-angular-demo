import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from '@app/shared/buttons/buttons.module';
import { InvalidDateValidatorDirective } from './invalid-date.directive';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule
  ],
  declarations: [
    InvalidDateValidatorDirective,
    TodoItemComponent
  ],
  exports: [InvalidDateValidatorDirective, TodoItemComponent, ButtonsModule]
})
export class SharedModule { }
