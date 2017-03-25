import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { PasswordResultService } from '../password/password-result.service';

import * as Clipboard from "clipboard";

@Component({
  selector: 'password-result',
  templateUrl: './password-result.component.html',
  styleUrls: ['./password-result.component.scss']
})

export class PasswordResultComponent implements OnInit, OnDestroy
{
  clipboard: Clipboard = new Clipboard('#copy-btn');
  passwordValue: string;
  subscription: Subscription;
  passwordResultOutput: FormGroup;
  passwordResult: AbstractControl;
  inputType: string = "password";
  isReadOnly: boolean;

  constructor(
    private passwordResultService: PasswordResultService,
    private fb: FormBuilder
  ) { }

  ngOnInit()
  {
    this.listenForValue();
    this.buildForm();
    this.isReadOnly = true;
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

  copyText()
  {
    this.clipboard.on('success', function (e)
    {
      console.info('Text copied successfully.');
      console.info('Action:', e.action);
      console.info('Text:', e.text);

      e.clearSelection();
    });

    this.clipboard.on('error', function (e)
    {
      console.info('Error copying text.', e);
    });
  }



  ngOnDestroy()
  {
    console.warn('Removing all subscriptions and bindings.')
    this.subscription.unsubscribe();
    this.clipboard.destroy();
  }

}
