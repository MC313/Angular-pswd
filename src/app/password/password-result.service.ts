import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PasswordResultService {

	private passwordValueSource = new Subject<string>();

	passwordValue$ = this.passwordValueSource.asObservable();

	setPasswordValue(value: string) {
		this.passwordValueSource.next(value);
	}
}