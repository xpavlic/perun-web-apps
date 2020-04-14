import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../../core/services/common/side-menu.service';
import { FacilitiesManagerService, RichFacility } from '@perun-web-apps/perun/openapi';
import { getRecentlyVisited, getRecentlyVisitedIds } from '@perun-web-apps/perun/utils';
import {
  TABLE_FACILITY_SELECT,
  TableConfigService
} from '@perun-web-apps/config/table-config';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-facility-select-page',
  templateUrl: './facility-select-page.component.html',
  styleUrls: ['./facility-select-page.component.scss']
})
export class FacilitySelectPageComponent implements OnInit {

  constructor(
    private facilityManager: FacilitiesManagerService,
    private sideMenuService: SideMenuService,
    private tableConfigService: TableConfigService
  ) { }

  facilities: RichFacility[] = [];
  recentIds: number[] = [];
  loading: boolean;
  filterValue = '';
  pageSize: number;
  tableId = TABLE_FACILITY_SELECT;

  ngOnInit() {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.sideMenuService.setFacilityMenuItems([]);

    this.refreshTable();
  }

  refreshTable() {
    this.loading = true;
    this.facilityManager.getRichFacilities().subscribe(facilities => {
      this.facilities = getRecentlyVisited('facilities', facilities);
      this.recentIds = getRecentlyVisitedIds('facilities');
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
