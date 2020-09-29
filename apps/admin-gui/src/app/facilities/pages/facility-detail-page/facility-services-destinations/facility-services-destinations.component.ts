import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  FacilitiesManagerService,
  Facility, RichDestination,
  RichResource,
  ServicesManagerService
} from '@perun-web-apps/perun/openapi';
import {
  TABLE_FACILITY_SERVICES_DESTINATION_LIST,
  TableConfigService
} from '@perun-web-apps/config/table-config';
import { ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { RemoveDestinationDialogComponent } from '../../../../shared/components/dialogs/remove-destination-dialog/remove-destination-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { GuiAuthResolver, NotificatorService } from '@perun-web-apps/perun/services';
import { AddServicesDestinationDialogComponent } from '../../../../shared/components/dialogs/add-services-destination-dialog/add-services-destination-dialog.component';
import { getDefaultDialogConfig } from '@perun-web-apps/perun/utils';

@Component({
  selector: 'app-perun-web-apps-facility-services-destinations',
  templateUrl: './facility-services-destinations.component.html',
  styleUrls: ['./facility-services-destinations.component.scss']
})
export class FacilityServicesDestinationsComponent implements OnInit {

  static id = 'FacilityServicesDestinationsComponent';

  // class used for animation
  @HostBinding('class.router-component') true;

  constructor(private dialog: MatDialog,
              private facilitiesManager: FacilitiesManagerService,
              private servicesManager: ServicesManagerService,
              private tableConfigService: TableConfigService,
              private translate: TranslateService,
              private notificator: NotificatorService,
              private route: ActivatedRoute,
              private authResolver: GuiAuthResolver) { }

  facility: Facility;
  destinations: RichDestination[];
  selected = new SelectionModel<RichResource>(true, []);
  displayedColumns: string[] = ['select', 'destinationId', 'service', 'destination', 'type', 'propagationType'];

  filterValue = '';

  loading: boolean;
  pageSize: number;
  tableId = TABLE_FACILITY_SERVICES_DESTINATION_LIST;

  addAuth: boolean;
  removeAuth: boolean;

  ngOnInit() {

    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.loading = true;
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
    this.servicesManager.getAllRichDestinationsForFacility(this.facility.id).subscribe( destinations => {
      this.destinations = destinations;
      this.selected.clear();
      this.setAuthRights();
      this.loading = false;
    });
  }

  setAuthRights(){
    this.addAuth = this.authResolver.isAuthorized('addDestination_Service_Facility_Destination_policy', [this.facility]);
    this.removeAuth = this.authResolver.isAuthorized('removeDestination_Service_Facility_Destination_policy', [this.facility]);

    this.displayedColumns = this.removeAuth ? ['select', 'destinationId', 'service', 'destination', 'type', 'propagationType'] :
      ['destinationId', 'service', 'destination', 'type', 'propagationType'];
  }

  addDestination() {
    const config = getDefaultDialogConfig();
    config.width = '600px';
    config.data = {facility: this.facility, theme: 'facility-theme'};

    const dialogRef = this.dialog.open(AddServicesDestinationDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.translate.get('FACILITY_DETAIL.SERVICES_DESTINATIONS.ADD_SUCCESS').subscribe(successMessage => {
          this.refreshTable();
          this.notificator.showSuccess(successMessage);
        });
      }
    });
  }

  removeDestination() {
    const config = getDefaultDialogConfig();
    config.width = '600px';
    config.data = {destinations: this.selected.selected, theme: 'facility-theme'};

    const dialogRef = this.dialog.open(RemoveDestinationDialogComponent, config);

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
