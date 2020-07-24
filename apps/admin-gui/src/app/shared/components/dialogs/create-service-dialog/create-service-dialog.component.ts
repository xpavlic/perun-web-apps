import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import { AddHostDialogData } from '../add-host-dialog/add-host-dialog.component';
import { FormControl, Validators } from '@angular/forms';
import { ServicesManagerService } from '@perun-web-apps/perun/openapi';


export interface CreateServiceDialogData {
  theme: string;
}
@Component({
  selector: 'app-create-service-dialog',
  templateUrl: './create-service-dialog.component.html',
  styleUrls: ['./create-service-dialog.component.scss']
})
export class CreateServiceDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CreateServiceDialogData>,
              @Inject(MAT_DIALOG_DATA) private data: AddHostDialogData,
              private serviceManager: ServicesManagerService,
              private notificator: NotificatorService,
              private translate: TranslateService) { }

  theme: string;
  loading = false

  name = "";
  description: string;
  status = true;
  delay = 10;
  path = "";

  nameControl = new FormControl('', [Validators.required]);
  delayControl = new FormControl(10, [Validators.pattern('^[0-9]*$')]);
  recurrenceControl = new FormControl(2, [Validators.pattern('^[0-9]*$')]);
  pathControl = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.theme = this.data.theme;
  }

  onCreate(){
    this.loading = true;
    this.serviceManager.createServiceWithService({
      service: {
        name: this.nameControl.value,
        description: this.description,
        delay: this.delayControl.value,
        recurrence: this.recurrenceControl.value,
        enabled: this.status,
        script: this.pathControl.value,
        id: 0,
        beanName: ''
      }
    }).subscribe(() => {
      this.notificator.showSuccess(this.translate.instant('DIALOGS.CREATE_SERVICE.SUCCESS'));
      this.dialogRef.close(true);
    }, () => this.loading = false);
  }

  onCancel(){
    this.dialogRef.close(false);
  }

  makePath(){
    const path = "./".concat(this.nameControl.value);
    this.pathControl.setValue(path);
  }
}
