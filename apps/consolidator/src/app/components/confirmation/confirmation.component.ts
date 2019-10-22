import { Component, Input, OnInit } from '@angular/core';
import { IdentityAddition } from '../add-identity-dialog/add-identity-dialog.component';

@Component({
  selector: 'perun-web-apps-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  @Input()
  identityAddition: IdentityAddition;

  ngOnInit() {
  }

}
