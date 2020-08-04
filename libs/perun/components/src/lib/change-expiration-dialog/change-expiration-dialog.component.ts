import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { MembersManagerService, RichMember } from '@perun-web-apps/perun/openapi';
import { formatDate } from '@angular/common';

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

  constructor(private dialogRef: MatDialogRef<ChangeExpirationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: RichMember,
              private membersManagerService: MembersManagerService,
              private translate: TranslateService,
              private notificator: NotificatorService,) {
    translate.get('DIALOGS.CHANGE_EXPIRATION.SUCCESS').subscribe(res => this.successMessage = res);
  }

  ngOnInit(): void {
    const attr = this.data.memberAttributes.find(att => att.baseFriendlyName === 'membershipExpiration');
    this.currentExpiration = attr ? attr.value as unknown as string : 'never';
    this.expirationControl = new FormControl(this.currentExpiration);
    this.newExpiration = this.currentExpiration;
  }

  onChange() {
    console.log(this.newExpiration);
  }

  onCancel() {
    this.dialogRef.close(false)
  }

  setExpiration() {
    this.newExpiration = formatDate(this.expirationControl.value,'yyyy-MM-dd','en-GB');
  }
}
