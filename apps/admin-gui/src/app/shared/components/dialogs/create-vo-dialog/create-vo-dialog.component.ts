import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { VoService } from '@perun-web-apps/perun/services';
import { NotificatorService } from '../../../../core/services/common/notificator.service';
import { TranslateService } from '@ngx-translate/core';

export interface CreateVoDialogData {
  theme: string;
}

@Component({
  selector: 'app-create-vo-dialog',
  templateUrl: './create-vo-dialog.component.html',
  styleUrls: ['./create-vo-dialog.component.scss']
})
export class CreateVoDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CreateVoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: CreateVoDialogData,
    private notificator: NotificatorService,
    private voService: VoService,
    private translate: TranslateService,
  ) {
    translate.get('DIALOGS.CREATE_VO.SUCCESS').subscribe(value => this.successMessage = value);
  }

  fullName = '';
  shortName = '';
  successMessage: string;

  loading: boolean;
  theme: string;

  ngOnInit() {
    this.theme = this.data.theme;
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    this.loading = true;
    this.voService.createVo(this.fullName, this.shortName).subscribe(() => {
      this.notificator.showSuccess(this.successMessage);
      this.loading = false;
      this.dialogRef.close(true);
    }, () => this.loading = false);
  }

  isValidFullName(): boolean{
    return 0 < this.fullName.length && this.fullName.length < 129
  }

  isValidShortName(): boolean {
    const regex = '^[\\w._-]*$';
    return this.shortName.length > 0 && this.shortName.length < 33
        && this.shortName.match(regex) && this.shortName.match(regex)[0].length === this.shortName.length;
  }
}
