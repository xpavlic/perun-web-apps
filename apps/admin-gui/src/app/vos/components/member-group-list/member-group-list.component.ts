import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {ActivatedRoute} from '@angular/router';
import { Group } from '@perun-web-apps/perun/openapi';
import { TABLE_ITEMS_COUNT_OPTIONS } from '@perun-web-apps/perun/utils';

@Component({
  selector: 'app-member-group-list',
  templateUrl: './member-group-list.component.html',
  styleUrls: ['./member-group-list.component.scss']
})
export class MemberGroupListComponent implements OnInit, OnChanges, AfterViewInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  memberId: number;

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  groups: Group[] = [];

  @Input()
  filterValue: string;

  @Input()
  selection = new SelectionModel<Group>(true, []);

  @Input()
  pageSize = 10;

  @Output()
  page = new EventEmitter<PageEvent>();

  private sort: MatSort;

  displayedColumns: string[] = ['select', 'id', 'name'];
  dataSource: MatTableDataSource<Group>;

  exporting = false;
  pageSizeOptions = TABLE_ITEMS_COUNT_OPTIONS;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Group>(this.groups);
    this.setDataSource();
  }

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filter = this.filterValue;
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Group): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  ngOnInit(): void {
    this.route.parent.params.subscribe(parentParams => this.memberId = parentParams['memberId']);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  pageChanged(event: PageEvent) {
    this.page.emit(event);
  }
}
