import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'password-result',
  templateUrl: './password-result.component.html',
  styleUrls: ['./password-result.component.scss']
})
export class PasswordResultComponent implements OnInit
{

  constructor() { }

  ngOnInit()
  { }

  @Input()
  result: string;

}
