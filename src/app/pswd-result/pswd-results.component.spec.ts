import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PswdResultComponent } from './pswd-result.component';
import { CopyButtonComponent } from '../copy-button/copy-button.component';
import { VisibleButtonComponent } from '../visible-button/visible-button.component';

describe('PswdResultComponent', () => {
  let component: PswdResultComponent;
  let fixture: ComponentFixture<PswdResultComponent>;
  let expectedPassword;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PswdResultComponent,
        CopyButtonComponent,
        VisibleButtonComponent
      ]
    });

    fixture = TestBed.createComponent(PswdResultComponent);
    component = fixture.componentInstance;
    expectedPassword = '9lVa0k6e10T';
    component.password = expectedPassword;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain mocked password value', () => {
    expect(component.password).toEqual(expectedPassword);
  });
});
