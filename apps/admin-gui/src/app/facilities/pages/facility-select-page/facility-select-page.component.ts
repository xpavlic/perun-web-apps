import { AfterViewChecked, Component, HostBinding, OnInit } from '@angular/core';
import {SideMenuService} from '../../../core/services/common/side-menu.service';
import { AuthzResolverService, FacilitiesManagerService, RichFacility } from '@perun-web-apps/perun/openapi';
import { getDefaultDialogConfig, getRecentlyVisited, getRecentlyVisitedIds } from '@perun-web-apps/perun/utils';
import {
  TABLE_FACILITY_SELECT,
  TableConfigService
} from '@perun-web-apps/config/table-config';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { CreateFacilityDialogComponent } from '../../../shared/components/dialogs/create-facility-dialog/create-facility-dialog.component';
import { DeleteFacilityDialogComponent } from '../../../shared/components/dialogs/delete-facility-dialog/delete-facility-dialog.component';
import { GuiAuthResolver, InitAuthService, StoreService } from '@perun-web-apps/perun/services';

@Component({
  selector: 'app-facility-select-page',
  templateUrl: './facility-select-page.component.html',
  styleUrls: ['./facility-select-page.component.scss']
})
export class FacilitySelectPageComponent implements OnInit, AfterViewChecked {

  static id = 'FacilitySelectPageComponent'

  @HostBinding('class.router-component') true;

  constructor(
    private facilityManager: FacilitiesManagerService,
    private sideMenuService: SideMenuService,
    private tableConfigService: TableConfigService,
    private dialog: MatDialog,
    private authResolver: GuiAuthResolver,
    private initAuthService: InitAuthService
  ) { }

  facilities: RichFacility[] = [];
  recentIds: number[] = [];
  loading: boolean;
  filterValue = '';
  pageSize: number;
  tableId = TABLE_FACILITY_SELECT;
  selection = new SelectionModel<RichFacility>(false, []);

  ngOnInit() {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);

    this.refreshTable();
  }

  ngAfterViewChecked() {
    this.sideMenuService.setFacilityMenuItems([]);
  }

  refreshTable() {
    this.loading = true;
    this.facilityManager.getRichFacilities().subscribe(facilities => {
      this.selection.clear();
      this.facilities = getRecentlyVisited('facilities', facilities);
      this.recentIds = getRecentlyVisitedIds('facilities');
      this.loading = false;
    });
  }

  onCreate() {
    const config = getDefaultDialogConfig();
    config.width = "800px";
    config.data = {
      theme: "facility-theme"
    };

    const dialogRef = this.dialog.open(CreateFacilityDialogComponent, config);

    dialogRef.afterClosed().subscribe(facilityCreated => {
      if (facilityCreated) {
        this.loading = true;
        this.initAuthService.loadPrincipal().then(() => this.refreshTable());
      }
    });
  }

  onDelete() {
    const config = getDefaultDialogConfig();
    config.width = "650px";
    config.data = {
      facility: this.selection.selected[0],
      theme: "facility-theme"
    };

    const dialogRef = this.dialog.open(DeleteFacilityDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
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
