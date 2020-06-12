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
  hosts: Host[] = [];
  selected = new SelectionModel<Host>(true, []);

  loading: boolean;
  filterValue = '';
  pageSize: number;
  tableId = TABLE_FACILITY_HOSTS_LIST;

  ngOnInit(): void {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.route.parent.params.subscribe(parentParams => {
      const facilityId = parentParams['facilityId'];

      this.facilitiesManager.getFacilityById(facilityId).subscribe(facility => {
        this.facility = facility;
        this.refreshTable();
      });
    });
  }

  refreshTable(){
    this.loading = true;
    this.facilitiesManager.getHosts(this.facility.id).subscribe(hosts => {
      this.hosts = hosts;
      this.selected.clear();
      this.loading = false;
    });
  }

  addHost(){
    //TODO
  }

  removeHost(){
    //TODO
  }

  applyFilter(filterValue: string){
    this.filterValue = filterValue;
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}


