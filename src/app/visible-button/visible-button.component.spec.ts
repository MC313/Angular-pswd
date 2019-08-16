import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibleButtonComponent } from './visible-button.component';

describe('VisibleButtonComponent', () => {
  let component: VisibleButtonComponent;
  let fixture: ComponentFixture<VisibleButtonComponent>;
  let buttonElement: HTMLElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisibleButtonComponent]
    });

    fixture = TestBed.createComponent(VisibleButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.nativeElement.querySelector('.icon-btn--visible');
    spyOn(component.inputTypeChanged, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a (inputTypeChanged) event on click', () => {
    buttonElement.click();
    expect(component.inputTypeChanged.emit).toHaveBeenCalled();
  });

  it('should set inputType to opposite value on button click', () => {
    component.inputType = "text"; 
    buttonElement.click();
    expect(component.inputType).toEqual("password");
  });

  it('should emit a (inputTypeChanged) event on click with a value of "text"', () => {
    let type = "text";
    component.inputTypeChanged.emit("text");
    component.inputTypeChanged.subscribe((inputType) => type = inputType);
    expect(type).toEqual("text");
  });
});
