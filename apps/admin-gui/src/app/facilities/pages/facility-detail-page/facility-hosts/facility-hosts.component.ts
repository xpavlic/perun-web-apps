import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FacilitiesManagerService, Facility, Host } from '@perun-web-apps/perun/openapi';
import {
  TABLE_FACILITY_HOSTS_LIST,
  TableConfigService
} from '@perun-web-apps/config/table-config';
import { ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import { AddHostDialogComponent } from '../../../../shared/components/dialogs/add-host-dialog/add-host-dialog.component';
import { RemoveHostDialogComponent } from '../../../../shared/components/dialogs/remove-host-dialog/remove-host-dialog.component';

@Component({
  selector: 'app-facility-hosts',
  templateUrl: './facility-hosts.component.html',
  styleUrls: ['./facility-hosts.component.scss']
})

export class FacilityHostsComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private facilitiesManager: FacilitiesManagerService,
              private tableConfigService: TableConfigService,
              private route: ActivatedRoute) {

  }

  facility: Facility;
  facilityId: number
  hosts: Host[] = [];
  selected = new SelectionModel<Host>(true, []);
  loading: boolean;
  filterValue = '';
  pageSize: number;
  tableId = TABLE_FACILITY_HOSTS_LIST;

  ngOnInit(): void {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.route.parent.params.subscribe(parentParams => {
      this.facilityId = parentParams['facilityId'];
      this.facilitiesManager.getFacilityById(this.facilityId).subscribe(facility => {
        this.facility = facility;
        this.refreshTable();
      });
    });
  }

  refreshTable() {
    this.loading = true;
    this.facilitiesManager.getHosts(this.facilityId).subscribe(hosts => {
      this.hosts = hosts;
      this.selected.clear();
      this.loading = false;
    });
  }

  addHost() {
    const config = getDefaultDialogConfig();
    config.width = '600px';
    config.data = {
      facilityId: this.facility.id,
      facilityName: this.facility.name,
      theme: 'facility-theme'
    };

    const dialogRef = this.dialog.open(AddHostDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable()
      }
    });
  }

  removeHost() {
    const config = getDefaultDialogConfig();
    config.width = '600px';
    config.data = {
      facilityId: this.facility.id,
      theme: 'facility-theme',
      hosts: this.selected.selected
    };

    const dialogRef = this.dialog.open(RemoveHostDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable()
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
