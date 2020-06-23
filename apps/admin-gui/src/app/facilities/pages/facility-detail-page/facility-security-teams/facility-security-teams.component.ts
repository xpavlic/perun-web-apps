import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FacilitiesManagerService, Facility, SecurityTeam } from '@perun-web-apps/perun/openapi';
import {
  TABLE_FACILITY_SECURITY_TEAMS_LIST,
  TableConfigService
} from '@perun-web-apps/config/table-config';
import { ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-facility-security-teams',
  templateUrl: './facility-security-teams.component.html',
  styleUrls: ['./facility-security-teams.component.scss']
})
export class FacilitySecurityTeamsComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private facilitiesManager: FacilitiesManagerService,
              private tableConfigService: TableConfigService,
              private route: ActivatedRoute) { }

  facility: Facility;
  securityTeams: SecurityTeam[]= []
  selected = new SelectionModel<SecurityTeam>(true, []);

  filterValue = '';

  loading: boolean;
  pageSize: number;
  tableId = TABLE_FACILITY_SECURITY_TEAMS_LIST;


  ngOnInit() {
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
    this.facilitiesManager.getAssignedSecurityTeams(this.facility.id).subscribe(securityTeams => {
      this.securityTeams = securityTeams;
      this.selected.clear();
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  addSecurityTeam(){
    //TODO
  }

  removeSecurityTeam(){
    //TODO
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}



