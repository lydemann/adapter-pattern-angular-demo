import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimaryButtonComponent } from '@app/shared/buttons/square-button/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '@app/shared/buttons/square-button/secondary-button/secondary-button.component';
import { SquareButtonComponent } from './square-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SquareButtonComponent, PrimaryButtonComponent, SecondaryButtonComponent]
})
export class SquareButtonModule { }
