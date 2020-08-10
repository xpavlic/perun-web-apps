import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import {
  ResourcesManagerService,
  Service,
  ServicesManagerService
} from '@perun-web-apps/perun/openapi';
import { TABLE_ASSIGN_SERVICE_TO_RESOURCE_DIALOG, TableConfigService } from '@perun-web-apps/config/table-config';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';

export interface AssignServiceToResourceDialogData {
  theme: string;
  resourceId: number;
}

@Component({
  selector: 'app-perun-web-apps-assign-service-to-resource-dialog',
  templateUrl: './assign-service-to-resource-dialog.component.html',
  styleUrls: ['./assign-service-to-resource-dialog.component.scss']
})
export class AssignServiceToResourceDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AssignServiceToResourceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AssignServiceToResourceDialogData,
              private notificator: NotificatorService,
              private translate: TranslateService,
              private resourceManager: ResourcesManagerService,
              private servicesManager: ServicesManagerService,
              private tableConfigService: TableConfigService) {
  }

  loading = false;
  theme: string;
  unAssignedServices: Service[];
  filteredServices: Service[];
  selection = new SelectionModel<Service>(true, []);
  tableId = TABLE_ASSIGN_SERVICE_TO_RESOURCE_DIALOG;
  pageSize: number;
  filterValue = '';

  ngOnInit(): void {
    this.loading = true;
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.theme = this.data.theme;
    this.resourceManager.getAssignedServicesToResource(this.data.resourceId).subscribe(assignedServices => {
      this.servicesManager.getServices().subscribe(allServices => {
        this.unAssignedServices = allServices;
        for (const assignedService of assignedServices) {
          for (const allService of allServices) {
            if (assignedService.id === allService.id) {
              this.unAssignedServices.splice(this.unAssignedServices.indexOf(allService), 1);
            }
          }
        }
        this.filteredServices = this.unAssignedServices;
        this.loading = false;
      });
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onAdd() {
    this.loading = true;
    const addedServices: number[] = [];
    for (const service of this.selection.selected) {
      addedServices.push(service.id);
    }
    this.resourceManager.assignServices(this.data.resourceId, addedServices).subscribe( () => {
      this.translate.get('DIALOGS.ASSIGN_SERVICE_TO_RESOURCE.SUCCESS_MESSAGE').subscribe(message => {
        this.notificator.showSuccess(message);
        this.dialogRef.close(true);
      });
    }, () => this.loading = false);
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }

}
