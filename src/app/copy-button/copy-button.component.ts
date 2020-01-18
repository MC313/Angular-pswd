import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import * as Clipboard from 'clipboard';

@Component({
  selector: 'pg-copy-button',
  templateUrl: './copy-button.component.html'
})
export class CopyButtonComponent implements OnInit {

  clipboard: Clipboard;
  copiedSuccess: boolean = false;
  private _password: string;

  @Input() set password(value: string) {
    this._password = value;
    this.copiedSuccess = false;
  }

  @Output() copied = new EventEmitter<{ type: string, msg: string }>();

  ngOnInit() {
    this.clipboard = new Clipboard('.icon-btn--copy');
  }

  get password(): string {
    return this._password;
  }

  copyText() {
    this.clipboard.on('success', (e) => {
      this.copied.emit({ type: "SUCCESS", msg: 'Password copied to clipboard' });
      this.copiedSuccess = true;
      e.clearSelection();
    });

    this.clipboard.on('error', (e) => {
      this.copied.emit({ type: "ERROR", msg: 'Error copying password to clipboard' });
    });
  }

  ngOnDestroy() {
    this.clipboard.destroy();
  }

}
