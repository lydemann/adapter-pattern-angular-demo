import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SquareButtonModule } from '@app/shared/buttons/square-button/square-button.module';

@NgModule({
  imports: [
    CommonModule,
    SquareButtonModule
  ],
  exports: [SquareButtonModule],
  declarations: []
})
export class ButtonsModule { }
