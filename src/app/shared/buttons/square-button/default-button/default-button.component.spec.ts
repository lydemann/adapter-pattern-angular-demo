/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultButtonComponent } from '@app/shared/buttons/square-button/default-button/default-button.component';

describe('PrimaryButtonComponent', () => {
  let component: DefaultButtonComponent;
  let fixture: ComponentFixture<DefaultButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
