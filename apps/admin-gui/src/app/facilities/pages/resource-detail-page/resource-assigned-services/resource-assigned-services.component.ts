import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourcesManagerService, Service } from '@perun-web-apps/perun/openapi';
import { TABLE_RESOURCE_ASSIGNED_SERVICES, TableConfigService } from '@perun-web-apps/config/table-config';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import { AssignServiceToResourceDialogComponent } from '../../../../shared/components/dialogs/assign-service-to-resource-dialog/assign-service-to-resource-dialog.component';
import { RemoveServiceFromResourceDialogComponent } from '../../../../shared/components/dialogs/remove-service-from-resource-dialog/remove-service-from-resource-dialog.component';

@Component({
  selector: 'app-perun-web-apps-resource-assigned-services',
  templateUrl: './resource-assigned-services.component.html',
  styleUrls: ['./resource-assigned-services.component.scss']
})
export class ResourceAssignedServicesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private resourcesManager: ResourcesManagerService,
              private tableConfigService: TableConfigService,
              private dialog: MatDialog) {
  }

  resourceId: number;
  assignedServices: Service[] = [];
  selected = new SelectionModel<Service>(true, []);
  loading: boolean;
  tableId = TABLE_RESOURCE_ASSIGNED_SERVICES;
  pageSize: number;
  filterValue = '';

  ngOnInit(): void {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.route.parent.params.subscribe(parentParams => {
      this.resourceId = parentParams['resourceId'];
      this.loadAllServices();
    });
  }


  loadAllServices() {
    this.loading = true;
    this.resourcesManager.getAssignedServicesToResource(this.resourceId).subscribe(assignedServices => {
      this.assignedServices = assignedServices;
      this.selected.clear();
      this.loading = false;
    });
  }

  addService() {
    const config = getDefaultDialogConfig();
    config.width = '800px';
    config.data = { theme: 'resource-theme', resourceId: this.resourceId };

    const dialogRef = this.dialog.open(AssignServiceToResourceDialogComponent, config);
    dialogRef.afterClosed().subscribe((success) => {
      if (success) {
        this.loadAllServices();
      }
    });
  }

  removeServices() {
    const config = getDefaultDialogConfig();
    config.width = '500px';
    config.data = { theme: 'resource-theme', resourceId: this.resourceId, services: this.selected.selected };

    const dialogRef = this.dialog.open(RemoveServiceFromResourceDialogComponent, config);
    dialogRef.afterClosed().subscribe((success) => {
      if (success) {
        this.loadAllServices();
      }
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
