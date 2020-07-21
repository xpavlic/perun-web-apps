import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from '@perun-web-apps/perun/openapi';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { TABLE_ITEMS_COUNT_OPTIONS } from '@perun-web-apps/perun/utils';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnChanges,  AfterViewInit {

  constructor() {
  }

  @ViewChild(MatSort, {static: true}) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @Input()
  services: Service[] = [];

  private sort: MatSort;

  @Input()
  filterValue: string;

  @Input()
  pageSize = 10;

  @Input()
  hideColumns: string[] = [];

  displayedColumns: string[] = ['select', 'id', 'name', 'enabled', 'script', 'description'];
  dataSource: MatTableDataSource<Service>;
  exporting = false;

  @Input()
  selection;

  @Output()
  page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizeOptions = TABLE_ITEMS_COUNT_OPTIONS;


  ngOnChanges(changes: SimpleChanges) {
    this.displayedColumns = this.displayedColumns.filter(x => !this.hideColumns.includes(x));
    this.dataSource = new MatTableDataSource<Service>(this.services);
    this.setDataSource();
    this.dataSource.filter = this.filterValue;
  }

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Service): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
