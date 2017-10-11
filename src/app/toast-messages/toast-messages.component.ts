import { Component, OnInit } from '@angular/core';

import { Message } from '../shared/toast-message.model';
import { ToastMessageService } from '../core/toast-messages.service';

@Component({
	selector: 'pwg-toast-messages',
	templateUrl: 'toast-messages.component.html',
	styleUrls: ['./toast-messages.component.scss'],
})

export class ToastMessagesComponent implements OnInit
{
	message: Message;

	constructor(private toast: ToastMessageService) { }

	ngOnInit()
	{
		this.toast.currentMessage$.subscribe(
			messageContent =>
			{
				this.message = messageContent
			})
	}

	dismissMessage()
	{
		this.toast.dismissMessage();
	}
}