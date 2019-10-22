import { Component, OnInit, ViewChild } from '@angular/core';
import { IdentityType, IdentityTypeData } from '../identity-type-selection/identity-type-selection.component';
import { MatHorizontalStepper } from '@angular/material';
import { Entity } from '../../models/Entity';
import { Router } from '@angular/router';

export interface IdentityAddition {
  type: IdentityType;
  action: Function;
  label: string
}

@Component({
  selector: 'perun-web-apps-add-identity-dialog',
  templateUrl: './add-identity-dialog.component.html',
  styleUrls: ['./add-identity-dialog.component.scss']
})
export class AddIdentityDialogComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  currentIndex = 0;
  selectedType: IdentityType;
  identityAddition: IdentityAddition;

  @ViewChild('stepper', {static: true})
  stepper: MatHorizontalStepper;

  ngOnInit(): void {
  }

  onTypeSelected(selectedType: IdentityType) {
    this.selectedType = selectedType;
    this.stepper.next();
  }

  onFederationSelected(federation: Entity) {
    this.identityAddition = {
      type: 'FID',
      action: () => this.router.navigate(['identityAuth']),
      label: 'YOU WILL NOW BE REDIRECTED TO THE LOGIN PAGE OF ' + federation.name.en + ' where you will sign with a diffrent login blablbal.'
    };
    this.stepper.next();
  }
}
