import { Component, OnInit } from '@angular/core';
import { FacilitiesManagerService, Owner } from '@perun-web-apps/perun/openapi';
import { ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { AddFacilityOwnerDialogComponent } from '../../../../../shared/components/dialogs/add-facility-owner-dialog/add-facility-owner-dialog.component';
import { getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import { RemoveFacilityOwnerDialogComponent } from '../../../../../shared/components/dialogs/remove-facility-owner-dialog/remove-facility-owner-dialog.component';

@Component({
  selector: 'app-facility-settings-owners',
  templateUrl: './facility-settings-owners.component.html',
  styleUrls: ['./facility-settings-owners.component.scss']
})
export class FacilitySettingsOwnersComponent implements OnInit {

  facilityId: number;
  owners: Owner[] = [];
  selection = new SelectionModel<Owner>(true, []);
  loading: boolean;
  filterValue: string;

  constructor(private facilitiesManagerService: FacilitiesManagerService,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.parent.parent.params.subscribe(params => {
      this.facilityId = params['facilityId'];

      this.refreshTable();
    });
  }

  refreshTable() {
    this.loading = true;
    this.selection.clear();
    this.facilitiesManagerService.getFacilityOwners(this.facilityId).subscribe(owners => {
      this.owners = owners;
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  onCreate() {
    const config = getDefaultDialogConfig();
    config.width = '800px';
    config.data = { theme: 'facility-theme', facilityId: this.facilityId, forbiddenOwners: this.owners.map(owner => owner.id) };

    const dialogRef = this.dialog.open(AddFacilityOwnerDialogComponent, config);

    dialogRef.afterClosed().subscribe((response)=> {
      if(response){
        this.refreshTable();
      }
    });
  }

  onRemove() {
    const config = getDefaultDialogConfig();
    config.width = '600px';
    config.data = { theme: 'facility-theme', owners: this.selection.selected, facilityId: this.facilityId };

    const dialogRef = this.dialog.open(RemoveFacilityOwnerDialogComponent, config);

    dialogRef.afterClosed().subscribe((response)=> {
      if(response){
        this.refreshTable();
      }
    });
  }
}
