import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

export class PasswordResultComponent implements OnInit, OnDestroy {
  clipboard: Clipboard = new Clipboard('#copy-btn');
  errorMessage: Message = { content: 'Error copying password', style: 'error', dismissed: undefined };
  generatedPassword: string = '';
  inputType: string = "password";
  successMessage: Message = { content: 'Password copied to clipboard', style: 'success', dismissed: undefined };
  subscription: Subscription;

  constructor(
    private passwordResultService: PasswordResultService,
    private toast: ToastMessageService
  ) { }

  ngOnInit() {
    this.listenForValue();
  }

  listenForValue() {
    this.subscription = this.passwordResultService.passwordValue$
      .subscribe(value => this.generatedPassword = value);
  }

  //Used to show and hide password text
  //by dynamically changing the input field type.
  toogleInputType() {
    this.inputType = (this.inputType === "password" ? "text" : "password");
  };

  copyText() {
    this.clipboard.on('success', (e) => {
      this.toast.showMessage(this.successMessage);
      e.clearSelection();
    });

    this.clipboard.on('error', (e) => {
      this.toast.showMessage(this.errorMessage);
      console.error('Error copying text.', e);
    });
  }

  ngOnDestroy() {
    console.warn('Removing all subscriptions and bindings.')
    this.subscription.unsubscribe();
    this.clipboard.destroy();
  }

}
