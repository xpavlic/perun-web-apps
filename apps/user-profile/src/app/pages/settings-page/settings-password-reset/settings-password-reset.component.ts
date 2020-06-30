import { Component, OnInit } from '@angular/core';
import { AttributesManagerService } from '@perun-web-apps/perun/openapi';
import { StoreService } from '@perun-web-apps/perun/services';

@Component({
  selector: 'perun-web-apps-settings-password-reset',
  templateUrl: './settings-password-reset.component.html',
  styleUrls: ['./settings-password-reset.component.scss']
})
export class SettingsPasswordResetComponent implements OnInit {

  constructor(private attributesManagerService:AttributesManagerService,
              private store: StoreService) { }

  nameSpaces: string[] = [];

  ngOnInit(): void {
    this.nameSpaces = this.store.get('login_namespace_attributes');
    
  }

}
