import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export type IdentityType = 'FID' | 'CERTIFICATE';

export interface IdentityTypeData {
  type: IdentityType;
  label: string;
}

@Component({
  selector: 'perun-web-apps-identity-type-selection',
  templateUrl: './identity-type-selection.component.html',
  styleUrls: ['./identity-type-selection.component.scss']
})
export class IdentityTypeSelectionComponent implements OnInit {

  constructor() { }

  @Output()
  typeSelected: EventEmitter<IdentityType> = new EventEmitter();

  types: IdentityTypeData[] = [
    {
      type: 'FID',
      label: 'ID_TYPE.FEDERATION.LABEL'
    },
    {
      type: 'CERTIFICATE',
      label: 'ID_TYPE.CERTIFICATE.LABEL'
    }
  ];

  ngOnInit() {
  }

}
