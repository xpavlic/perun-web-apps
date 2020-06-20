import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceState, TasksManagerService } from '@perun-web-apps/perun/openapi';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import {
  TABLE_FACILITY_SERVICES_STATUS_LIST,
  TableConfigService
} from '@perun-web-apps/config/table-config';

@Component({
  selector: 'app-facility-service-status',
  templateUrl: './facility-service-status.component.html',
  styleUrls: ['./facility-service-status.component.scss']
})
export class FacilityServiceStatusComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private tasksManager: TasksManagerService,
              private tableConfigService: TableConfigService,) {
  }

  facilityId: number;
  servicesStates: ServiceState[];

  selected = new SelectionModel<ServiceState>(true, []);
  filterValue = '';
  loading: boolean;
  pageSize: number;

  tableId = TABLE_FACILITY_SERVICES_STATUS_LIST;

  ngOnInit(): void {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);

    this.route.parent.params.subscribe(params => {
      this.facilityId = params['facilityId'];
      this.refreshTable();
    });
  }

  forcePropagation() {
  }

  allow() {
  }

  block() {
  }

  delete() {
  }

  refreshTable() {
    this.loading = true;
    this.tasksManager.getFacilityServicesState(this.facilityId).subscribe(states => {
      this.servicesStates = states;
      this.loading = false;
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
