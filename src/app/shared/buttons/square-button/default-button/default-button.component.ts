import { Component, Inject } from '@angular/core';
import { ButtonChildComponent } from '@app/shared/buttons/button-child-component';
import { SquareButtonTypes } from '@app/shared/buttons/square-button/square-button-types';
import { SquareButtonComponent } from '@app/shared/buttons/square-button/square-button.component';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent
  extends ButtonChildComponent<SquareButtonTypes> {
  constructor(@Inject(SquareButtonComponent) parent: SquareButtonComponent) {
    super();
    this.parent = parent;
  }
}
