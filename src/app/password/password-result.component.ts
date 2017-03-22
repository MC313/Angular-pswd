import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { PasswordResultService } from '../password/password-result.service';

@Component({
  selector: 'password-result',
  templateUrl: './password-result.component.html',
  styleUrls: ['./password-result.component.scss']
})
export class PasswordResultComponent implements OnInit, OnDestroy
{

  passwordValue: string;
  subscription: Subscription;
  passwordResultOutput: FormGroup;
  passwordResult: AbstractControl;
  inputType: string = "password";

  constructor(
    private passwordResultService: PasswordResultService,
    private fb: FormBuilder
  ) { }

  @Input()
  result: string;

  ngOnInit()
  {
    this.listenForValue();
    this.buildForm();
  }

  buildForm()
  {
    this.passwordResultOutput = this.fb.group({
      passwordResult: ['']
    })
  }

  listenForValue()
  {
    this.subscription = this.passwordResultService.passwordValue$.subscribe(
      value =>
      {
        this.setFormValue(value);
      });
  }

  setFormValue(value: string)
  {
    this.passwordResultOutput = this.fb.group({
      passwordResult: [value]
    })
  }

  toogleInputType()
  {
    this.inputType = this.inputType === "password" ? "text" : "password";
  };



  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
