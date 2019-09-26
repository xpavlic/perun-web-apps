import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Identity } from '../../models/Identity';
import { MatTableDataSource } from '@angular/material';
import { UserExtSource } from '@perun-web-apps/perun/models';


@Component({
  selector: 'perun-web-apps-identities',
  templateUrl: './identities.component.html',
  styleUrls: ['./identities.component.scss']
})
export class IdentitiesComponent {

  @HostBinding('class.identities-content') true;

  constructor() { }

  @Input()
  title: string;

  @Input()
  identities: UserExtSource[];
}
