import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-application-form-item-dialog',
  templateUrl: './delete-application-form-item-dialog.component.html',
  styleUrls: ['./delete-application-form-item-dialog.component.scss']
})
export class DeleteApplicationFormItemDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteApplicationFormItemDialogComponent>) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  submit() {
    this.dialogRef.close(true);
  }
}
