import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePswdComponent } from './generate-pswd.component';

describe('GeneratePswdComponent', () => {
  let component: GeneratePswdComponent;
  let fixture: ComponentFixture<GeneratePswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePswdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
