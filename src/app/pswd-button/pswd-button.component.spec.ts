import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PswdButtonComponent } from './pswd-button.component';

describe('PswdButtonComponent', () => {
  let component: PswdButtonComponent;
  let fixture: ComponentFixture<PswdButtonComponent>;
  let buttonElement: HTMLElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PswdButtonComponent]
    });

    fixture = TestBed.createComponent(PswdButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.nativeElement.querySelector('button');
    spyOn(component.clicked, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a (clicked) event on click', () => {
    buttonElement.click();
    expect(component.clicked.emit).toHaveBeenCalled();
  });
});
