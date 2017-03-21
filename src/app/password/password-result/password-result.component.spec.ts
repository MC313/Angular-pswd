import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResultComponent } from './password-result.component';

describe('PasswordResultComponent', () => {
  let component: PasswordResultComponent;
  let fixture: ComponentFixture<PasswordResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
