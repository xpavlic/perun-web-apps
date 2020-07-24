import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExtSource, ExtSourcesManagerService } from '@perun-web-apps/perun/openapi';
import { SelectionModel } from '@angular/cdk/collections';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import { PageEvent } from '@angular/material/paginator';
import { TABLE_ADD_EXTSOURCE_DIALOG, TableConfigService } from '@perun-web-apps/config/table-config';

export interface AddExtSourceDialogData {
  voId: number
  theme: string;
  voExtSources: ExtSource[];
}

@Component({
  selector: 'app-add-ext-source-dialog',
  templateUrl: './add-ext-source-dialog.component.html',
  styleUrls: ['./add-ext-source-dialog.component.scss']
})
export class AddExtSourceDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddExtSourceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: AddExtSourceDialogData,
              private extSourceService: ExtSourcesManagerService,
              private notificator: NotificatorService,
              private tableConfigService: TableConfigService,
              private translate: TranslateService) {
    this.translate.get('DIALOGS.ADD_EXT_SOURCES.SUCCESS_ADDED').subscribe(result => this.successMessage = result);
  }

  theme: string;
  extSources: ExtSource[] = [];
  selection = new SelectionModel<ExtSource>(true, []);
  loading = false;
  filterValue = '';
  successMessage: string;
  pageSize: number;
  tableId = TABLE_ADD_EXTSOURCE_DIALOG;

  ngOnInit() {
    this.loading = true;
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.theme = this.data.theme;
    this.extSourceService.getExtSources().subscribe(sources => {
      this.extSources = sources.filter(source => !this.data.voExtSources.includes(source));
      this.loading = false;
    }, () => this.loading = false);
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  onAdd() {
    this.loading = true;
    for (const source of this.selection.selected) {
      this.extSourceService.addExtSourceWithVoSource(this.data.voId, source.id).subscribe(_ => {
        this.notificator.showSuccess(this.successMessage + source.name);
        this.dialogRef.close(true);
      }, () => this.loading = false);
    }
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
