import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Group, GroupsManagerService } from '@perun-web-apps/perun/openapi';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export interface EditGroupDialogData {
  groupId: number;
  theme: string;
}

@Component({
  selector: 'perun-web-apps-edit-group-dialog',
  templateUrl: './edit-group-dialog.component.html',
  styleUrls: ['./edit-group-dialog.component.scss']
})
export class EditGroupDialogComponent implements OnInit {

  loading: boolean;
  nameControl: FormControl;
  descriptionControl: FormControl;
  theme: string;
  group: Group;
  successMessage: string;

  constructor(public dialogRef: MatDialogRef<EditGroupDialogData>,
              @Inject(MAT_DIALOG_DATA) public data: EditGroupDialogData,
              private groupService: GroupsManagerService,
              private notificator: NotificatorService,
              private translate: TranslateService) {
    this.translate.get('DIALOGS.EDIT_GROUP.SUCCESS').subscribe(res => this.successMessage = res);
  }

  ngOnInit(): void {
    this.theme = this.data.theme;
    this.loading = true;
    this.groupService.getGroupById(this.data.groupId).subscribe(group => {
      this.nameControl = new FormControl(group.name, [Validators.required]);
      this.descriptionControl = new FormControl(group.description, [Validators.required]);
      this.group = group;
      this.loading = false;
    })
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSave() {
    this.group.name = this.nameControl.value;
    this.group.description = this.descriptionControl.value;
    this.groupService.updateGroup({ group: this.group }).subscribe(res => {
      this.notificator.showSuccess(this.successMessage);
      this.dialogRef.close(true);
    });
  }
}
