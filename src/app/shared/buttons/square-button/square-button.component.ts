import { Component, OnInit } from '@angular/core';
import { ButtonParentComponent } from '@app/shared/buttons/button-parent-component';
import { SquareButtonTypes } from '@app/shared/buttons/square-button/square-button-types';

@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.css']
})
export class SquareButtonComponent extends ButtonParentComponent<SquareButtonTypes> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
