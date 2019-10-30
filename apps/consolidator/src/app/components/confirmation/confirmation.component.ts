import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output()
  proceed: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
  }

}
