import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersManagerService } from '@perun-web-apps/perun/openapi';
import { TranslateService } from '@ngx-translate/core';
import { NotificatorService } from '@perun-web-apps/perun/services';

export interface ChangeEmailDialogData {
  userId: number;
}

@Component({
  selector: 'perun-web-apps-change-email-dialog',
  templateUrl: './change-email-dialog.component.html',
  styleUrls: ['./change-email-dialog.component.scss']
})
export class ChangeEmailDialogComponent implements OnInit {

  successMessage: string;

  emailControl: FormControl;

  constructor(private dialogRef: MatDialogRef<ChangeEmailDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: ChangeEmailDialogData,
              private translate: TranslateService,
              private notificator: NotificatorService,
              private usersManagerService: UsersManagerService
  ) {
    translate.get('DIALOGS.CHANGE_EMAIL.SUCCESS').subscribe(res => this.successMessage = res);
  }

  ngOnInit() {
    this.emailControl = new FormControl(null, [Validators.required,
      Validators.pattern(/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)]);

  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.usersManagerService.requestPreferredEmailChange(this.data.userId,this.emailControl.value, this.translate.currentLang).subscribe(() => {
      this.notificator.showSuccess(this.successMessage);
      this.dialogRef.close();
    })

  }
}
