import { Component, HostBinding, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
// tslint:disable-next-line:max-line-length
import { DeleteAttributeDefinitionDialogComponent } from '../../../../shared/components/dialogs/delete-attribute-definition-dialog/delete-attribute-definition-dialog.component';
import { MatDialog } from '@angular/material/dialog';
// tslint:disable-next-line:max-line-length
import { CreateAttributeDefinitionDialogComponent } from '../../../../shared/components/dialogs/create-attribute-definition-dialog/create-attribute-definition-dialog.component';
import { filterCoreAttributesDefinitions } from '@perun-web-apps/perun/utils';
import { AttributeDefinition, AttributesManagerService } from '@perun-web-apps/perun/openapi';
import { PageEvent } from '@angular/material/paginator';
import { TABLE_ADMIN_ATTRIBUTES, TableConfigService } from '@perun-web-apps/config/table-config';

@Component({
  selector: 'app-admin-attributes',
  templateUrl: './admin-attributes.component.html',
  styleUrls: ['./admin-attributes.component.scss']
})
export class AdminAttributesComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private dialog: MatDialog,
    private attributesManager: AttributesManagerService,
    private tableConfigService: TableConfigService
  ) {
  }

  attrDefinitions: AttributeDefinition[] = [];

  selected = new SelectionModel<AttributeDefinition>(true, []);
  filterValue = '';

  loading: boolean;
  pageSize: number;
  tableId = TABLE_ADMIN_ATTRIBUTES;

  ngOnInit() {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.refreshTable();
  }

  onCreate() {
    const dialogRef = this.dialog.open(CreateAttributeDefinitionDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  onDelete() {
    const dialogRef = this.dialog.open(DeleteAttributeDefinitionDialogComponent, {
      width: '450px',
      data: {
        attributes: this.selected.selected
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
        this.selected.clear();
      }
    });
  }

  refreshTable() {
    this.loading = true;
    this.attributesManager.getAllAttributeDefinitions().subscribe(attrDefs => {
      this.attrDefinitions = filterCoreAttributesDefinitions(attrDefs);
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
