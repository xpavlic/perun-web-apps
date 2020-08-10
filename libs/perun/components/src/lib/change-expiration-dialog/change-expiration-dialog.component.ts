import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { Attribute, AttributesManagerService, RichMember } from '@perun-web-apps/perun/openapi';
import { formatDate } from '@angular/common';
import { Urns } from '@perun-web-apps/perun/urns';

@Component({
  selector: 'perun-web-apps-change-expiration-dialog',
  templateUrl: './change-expiration-dialog.component.html',
  styleUrls: ['./change-expiration-dialog.component.scss']
})
export class ChangeExpirationDialogComponent implements OnInit {

  currentExpiration: string;
  newExpiration: string;
  loading: boolean;
  expirationControl: FormControl;
  successMessage: string;
  expirationAttr: Attribute;

  constructor(private dialogRef: MatDialogRef<ChangeExpirationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: RichMember,
              private attributesManagerService: AttributesManagerService,
              private translate: TranslateService,
              private notificator: NotificatorService,) {
    translate.get('DIALOGS.CHANGE_EXPIRATION.SUCCESS').subscribe(res => this.successMessage = res);
  }

  ngOnInit(): void {
    this.expirationAttr = this.data.memberAttributes.find(att => att.baseFriendlyName === 'membershipExpiration');
    this.currentExpiration = this.expirationAttr ? this.expirationAttr.value as unknown as string : 'never';
    this.expirationControl = new FormControl(this.currentExpiration);
    this.newExpiration = this.currentExpiration;
  }

  onChange() {
    this.loading = true;
    if(!this.expirationAttr){
     this.attributesManagerService.getAttributeDefinitionByName(Urns.MEMBER_DEF_EXPIRATION).subscribe(att => {
       this.expirationAttr = att;
       this.changeExpiration();
     })
    }else {
      this.changeExpiration();
    }

  }

  private changeExpiration() {
    // @ts-ignore
    this.expirationAttr.value = this.newExpiration === 'never' ? null : this.newExpiration;
    this.attributesManagerService.setMemberAttribute({member: this.data.id, attribute: this.expirationAttr}).subscribe(() => {
      this.loading = false;
      this.notificator.showSuccess(this.successMessage);
      this.dialogRef.close(true);
    })
  }

  onCancel() {
    this.dialogRef.close(false)
  }

  setExpiration() {
    this.newExpiration = formatDate(this.expirationControl.value,'yyyy-MM-dd','en-GB');
  }
}
