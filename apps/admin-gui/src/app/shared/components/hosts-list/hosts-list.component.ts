import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Facility, Host } from '@perun-web-apps/perun/openapi';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TABLE_ITEMS_COUNT_OPTIONS } from '@perun-web-apps/perun/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hosts-list',
  templateUrl: './hosts-list.component.html',
  styleUrls: ['./hosts-list.component.css']
})
export class HostsListComponent implements AfterViewInit, OnChanges {

  constructor(private router: Router) { }

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @Input()
  hosts: Host[] = [];
  @Input()
  selection = new SelectionModel<Host>(true, []);
  @Input()
  filterValue: string;
  @Input()
  pageSize = 10;
  @Input()
  facilityId: number;

  @Output()
  page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  private sort: MatSort;

  displayedColumns: string[] = ['select', 'id', "name"];
  dataSource: MatTableDataSource<Host>;

  exporting = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizeOptions = TABLE_ITEMS_COUNT_OPTIONS;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Host>(this.hosts);
    this.setDataSource();
    this.dataSource.filter = this.filterValue;
  }


  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'name' :{
            if (item.hostname) {
              return item.hostname;
            }
            break;
          }
          default: return item[property];
        }
      };
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
  checkboxLabel(row?: Host): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  selectHost(host: Host){
    this.router.navigate(['/facilities', this.facilityId, 'hosts', host.id])
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
