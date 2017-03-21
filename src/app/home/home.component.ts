import { Component, OnInit, OnDestroy } from '@angular/core';
import { PasswordResultService } from '../password/password-result.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'pwg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  passwordValue: string;
  subscription: Subscription;

  constructor(private passwordResultService: PasswordResultService)
  { }

  ngOnInit()
  {
    this.subscription = this.passwordResultService.passwordValue$.subscribe(
      value =>
      {
        console.log('VALUE', value)
        this.passwordValue = value;
      });
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
