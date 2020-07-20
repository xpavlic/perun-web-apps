import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Attribute, AttributesManagerService } from '@perun-web-apps/perun/openapi';
import { TABLE_ATTRIBUTES_SETTINGS, TableConfigService } from '@perun-web-apps/config/table-config';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { filterCoreAttributes, getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import { CreateAttributeDialogComponent } from '../dialogs/create-attribute-dialog/create-attribute-dialog.component';
import { AttributesListComponent, EditAttributeDialogComponent } from '@perun-web-apps/perun/components';
import { DeleteAttributeDialogComponent } from '../dialogs/delete-attribute-dialog/delete-attribute-dialog.component';

@Component({
  selector: 'app-identity-detail',
  templateUrl: './identity-detail.component.html',
  styleUrls: ['./identity-detail.component.scss']
})
export class IdentityDetailComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private attributesManager: AttributesManagerService,
              private tableConfigService: TableConfigService,
              private route: ActivatedRoute) {

  }

  @ViewChild('list')
  list: AttributesListComponent;

  loading = false;
  selection = new SelectionModel<Attribute>(true , []);
  tableId = TABLE_ATTRIBUTES_SETTINGS;
  attributes: Attribute[] = [];
  pageSize: number;
  userExtSource: number;

  ngOnInit(): void {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.route.params.subscribe(params => {
      this.userExtSource = params["identityId"];
      this.refreshTable();
    });
  }

  refreshTable() {
    this.loading = true;
    this.attributesManager.getUserExtSourceAttributes(this.userExtSource).subscribe(attributes => {
      this.attributes = filterCoreAttributes(attributes);
      this.selection.clear();
      this.loading = false;
    });
  }

  onAdd() {
    const config = getDefaultDialogConfig();
    config.width = "1050px";
    config.data = {
      entityId: this.userExtSource,
      entity: "ues",
      notEmptyAttributes: this.attributes,
      style: 'user-theme'
    };

    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.refreshTable();
      }
    });
  }

  onSave() {
    this.list.updateMapAttributes();

    const config = getDefaultDialogConfig();
    config.width = '450px';
    config.data = {
      entityId: this.userExtSource,
      entity: 'ues',
      attributes: this.selection.selected
    };

    const dialogRef = this.dialog.open(EditAttributeDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  onRemove() {
    const config = getDefaultDialogConfig();
    config.width = '450px';
    config.data = {
      entityId: this.userExtSource,
      entity: 'ues',
      attributes: this.selection.selected
    };

    const dialogRef = this.dialog.open(DeleteAttributeDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
