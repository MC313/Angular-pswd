import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Message } from '../shared/toast-message.model';


@Injectable()
export class ToastMessageService
{
	message: Message;
	private _toastMessageSource = new BehaviorSubject<Message>(this.message);
	public readonly currentMessage$ = this._toastMessageSource.asObservable();

	constructor() { }

	showMessage(messageContent: Message)
	{
		messageContent.dismissed = false;
		this._toastMessageSource.next(messageContent);
	}

	dismissMessage()
	{
		let currentMessage = this._toastMessageSource.getValue();
		currentMessage.dismissed = true;
		this._toastMessageSource.next(currentMessage);
	}
}