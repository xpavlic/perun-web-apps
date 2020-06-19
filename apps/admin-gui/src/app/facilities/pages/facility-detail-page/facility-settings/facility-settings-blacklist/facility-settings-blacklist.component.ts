import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  BanOnFacility,
  FacilitiesManagerService,
  Facility,
  User,
  UsersManagerService
} from '@perun-web-apps/perun/openapi';
import { TABLE_FACILITY_BLACKLIST_LIST, TableConfigService } from '@perun-web-apps/config/table-config';
import { ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'perun-web-apps-facility-settings-blacklist',
  templateUrl: './facility-settings-blacklist.component.html',
  styleUrls: ['./facility-settings-blacklist.component.scss']
})
export class FacilitySettingsBlacklistComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private facilitiesManager: FacilitiesManagerService,
              private usersManager: UsersManagerService,
              private tableConfigService: TableConfigService,
              private route: ActivatedRoute) { }

  facility: Facility;
  bansOnFacilitiesWithUsers: [BanOnFacility, User][] = [];
  selected = new SelectionModel<[BanOnFacility, User]>();
  filterValue='';
  loading: boolean;
  pageSize: number;
  tableId = TABLE_FACILITY_BLACKLIST_LIST;


  ngOnInit(): void {
    this.route.parent.params.subscribe(parentParams => {
      const facilityId = parentParams['facilityId'];
      this.facilitiesManager.getFacilityById(facilityId).subscribe(facility => {
        this.facility = facility;

        this.refreshTable();
      });
    });
  }

  refreshTable() {
    this.loading = true;
    this.facilitiesManager.getBansForFacility(this.facility.id).subscribe( bansOnFacility => {
      for(let ban : BanOnFacility in bansOnFacility) {
        if (bansOnFacility.hasOwnProperty(ban)) {
          let user : User;
          this.usersManager.getUserById(ban.userId).subscribe( subscriptionUser => {
            user = subscriptionUser;
          });
          this.bansOnFacilitiesWithUsers.push([ban, user])
        }
      }
      this.selected.clear();
      this.loading = false;
    });
    this.loading = false;
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
