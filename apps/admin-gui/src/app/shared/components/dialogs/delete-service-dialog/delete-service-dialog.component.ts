import { Component, Inject, OnInit } from '@angular/core';
import { Service, ServicesManagerService } from '@perun-web-apps/perun/openapi';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import { MatTableDataSource } from '@angular/material/table';

export interface DeleteServiceDialogData {
  theme: string;
  services: Service[];
}

@Component({
  selector: 'app-delete-service-dialog',
  templateUrl: './delete-service-dialog.component.html',
  styleUrls: ['./delete-service-dialog.component.scss']
})
export class DeleteServiceDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteServiceDialogData>,
              @Inject(MAT_DIALOG_DATA) private data: DeleteServiceDialogData,
              private serviceManager: ServicesManagerService,
              private notificator: NotificatorService,
              private translate: TranslateService) {  }

  theme: string;
  services: Service[];
  displayedColumns = ['name'];
  dataSource = new MatTableDataSource<Service>(this.data.services);


  ngOnInit(): void {
    this.theme = this.data.theme;
    this.services = this.data.services;
  }

  recDelete(): void{
    if(this.services.length === 0){
      this.dialogRef.close(true);
      this.notificator.showSuccess(this.translate.instant('DIALOGS.DELETE_SERVICE.SUCCESS'));
      return;
    }

    this.serviceManager.deleteService(this.services.pop().id).subscribe(() =>{
      this.recDelete();
    });
  }

  onDelete() {
    this.recDelete();
  }

  onCancel() {
    this.dialogRef.close(false);
  }

}
