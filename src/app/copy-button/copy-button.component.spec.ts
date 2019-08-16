import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CopyButtonComponent } from './copy-button.component';

describe('CopyButtonComponent', () => {
  let component: CopyButtonComponent;
  let fixture: ComponentFixture<CopyButtonComponent>;
  let buttonElement: HTMLElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyButtonComponent]
    });

    fixture = TestBed.createComponent(CopyButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.nativeElement.querySelector('button');
    spyOn(component, 'copyText');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a (copied) event on click', () => {
    buttonElement.click();
    expect(component.copyText).toHaveBeenCalled();
  });
});
