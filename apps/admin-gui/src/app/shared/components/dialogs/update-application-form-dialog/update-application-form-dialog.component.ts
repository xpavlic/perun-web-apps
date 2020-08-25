import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApplicationForm, RegistrarManagerService } from '@perun-web-apps/perun/openapi';

@Component({
  selector: 'app-update-application-form-dialog',
  templateUrl: './update-application-form-dialog.component.html',
  styleUrls: ['./update-application-form-dialog.component.scss']
})
export class UpdateApplicationFormDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UpdateApplicationFormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data,
              private registrarManager: RegistrarManagerService) { }

  applicationForm: ApplicationForm;
  moduleName: string;
  initialState: string;
  extensionState: string;

  ngOnInit() {
    this.applicationForm = this.data.applicationForm;
    this.moduleName = this.applicationForm.moduleClassName;
    this.initialState = this.applicationForm.automaticApproval ? 'auto' : 'manual';
    this.extensionState = this.applicationForm.automaticApprovalExtension ? 'auto' : 'manual';
  }

  onCancel() {
    this.dialogRef.close();
  }

  submit() {
    this.applicationForm.moduleClassName = this.moduleName;
    this.applicationForm.automaticApproval = this.initialState === 'auto';
    this.applicationForm.automaticApprovalExtension = this.extensionState === 'auto';
    this.registrarManager.updateForm({form: this.applicationForm}).subscribe( updatedForm => {
      this.dialogRef.close(updatedForm);
    });
  }
}
