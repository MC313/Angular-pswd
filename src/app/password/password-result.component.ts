import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Message } from '../shared/toast-message.model';
import { PasswordResultService } from '../password/password-result.service';
import { ToastMessageService } from '../core/toast-messages.service';

import * as Clipboard from "clipboard";

@Component({
  selector: 'password-result',
  templateUrl: './password-result.component.html',
  styleUrls: ['./password-result.component.scss']
})

export class PasswordResultComponent implements OnInit, OnDestroy
{
  clipboard: Clipboard = new Clipboard('#copy-btn');
  inputType: string = "password";
  isReadOnly: boolean;
  message: Message;
  messageStyle: object;
  successMessage: Message = { content: 'Password copied to clipboard', style: 'success', dismissed: undefined };
  errorMessage: Message = { content: 'Error copying password', style: 'error', dismissed: undefined };
  passwordResult: AbstractControl;
  passwordResultOutput: FormGroup;
  passwordValue: string;
  subscription: Subscription;
  successStyle = { 'background-color': 'green' }

  constructor(
    private passwordResultService: PasswordResultService,
    private toast: ToastMessageService,
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

  //Used to show and hide password text
  //by dynamically changing the input field type.
  toogleInputType()
  {
    this.inputType = (this.inputType === "password" ? "text" : "password");
  };

  copyText()
  {
    this.clipboard.on('success', (e) =>
    {
      this.message = this.successMessage;
      this.toast.showMessage(this.message);
      this.setMessageStyle(this.message.style);
      e.clearSelection();
    });

    this.clipboard.on('error', (e) =>
    {
      this.message = this.errorMessage;
      this.toast.showMessage(this.message);

      console.error('Error copying text.', e);
    });
  }

  setMessageStyle(style: string): void
  {
    const successStyle = { color: 'green' }
    const errorStyle = { color: 'red' }
    this.messageStyle = style === 'success' ? successStyle : errorStyle;
  }

  ngOnDestroy()
  {
    console.warn('Removing all subscriptions and bindings.')
    this.subscription.unsubscribe();
    this.clipboard.destroy();
  }

}
