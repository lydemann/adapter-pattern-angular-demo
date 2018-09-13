import { Component, Inject } from '@angular/core';
import { ButtonChildComponent } from '@app/shared/buttons/button-child-component';
import { SquareButtonTypes } from '@app/shared/buttons/square-button/square-button-types';
import { SquareButtonComponent } from '@app/shared/buttons/square-button/square-button.component';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent
  extends ButtonChildComponent<SquareButtonTypes> {
  constructor(@Inject(SquareButtonComponent) parent: SquareButtonComponent) {
    super();
    this.parent = parent;
  }
}
