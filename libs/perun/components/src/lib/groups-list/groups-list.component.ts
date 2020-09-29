import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges, Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Group, RichGroup, Vo } from '@perun-web-apps/perun/openapi';
import { getDefaultDialogConfig, TABLE_ITEMS_COUNT_OPTIONS } from '@perun-web-apps/perun/utils';
import { MatDialog } from '@angular/material/dialog';
import { GroupSyncDetailDialogComponent } from '../group-sync-detail-dialog/group-sync-detail-dialog.component';
import { GuiAuthResolver } from '@perun-web-apps/perun/services';
import {
  EditFacilityResourceGroupVoDialogComponent,
  EditFacilityResourceGroupVoDialogOptions
} from '../edit-facility-resource-group-vo-dialog/edit-facility-resource-group-vo-dialog.component';


@Component({
  selector: 'perun-web-apps-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements AfterViewInit, OnChanges {

  displayButtons: boolean;

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @Input()
  theme = 'group-theme';

  constructor(private dialog: MatDialog,
              private authResolver: GuiAuthResolver) { }

  @Output()
  moveGroup = new EventEmitter<Group>();

  @Input()
  groups: Group[] = [];

  @Input()
  selection = new SelectionModel<Group>(true, []);

  private sort: MatSort;
  private hasMembersGroup = false;

  @Input()
  hideColumns: string[] = [];

  @Input()
  disableMembers: boolean;

  @Input()
  disableGroups: boolean;

  @Input()
  groupsToDisable: Set<number> = new Set<number>();

  @Input()
  pageSize = 10;

  @Input()
  filter = '';

  @Input()
  disableHeadCheckbox: boolean;

  @Input()
  parentGroup: Group;

  @Input()
  disableRouting = false;

  @Input()
  authType: string;

  @Output()
  page = new EventEmitter<PageEvent>();

  @Output()
  refreshTable = new EventEmitter<void>();

  displayedColumns: string[] = ['select', 'id', 'vo', 'name', 'description', 'menu'];
  dataSource: MatTableDataSource<Group>;

  exporting = false;
  disabledRouting = false;

  vo: Vo;

  removeAuth: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizeOptions = TABLE_ITEMS_COUNT_OPTIONS;

  @HostListener('window:resize', ['$event'])
  shouldHideButtons() {
    this.displayButtons = window.innerWidth > 1300;
  }


  ngOnChanges(changes: SimpleChanges) {
    this.disabledRouting = this.disableRouting;
    this.hasMembersGroup = this.checkIfHasMembersGroup();
    this.dataSource = new MatTableDataSource<Group>(this.groups);
    this.setDataSource();
    if (this.authType) {
      this.removeAuth = this.setAuth();
    }
  }

  checkIfHasMembersGroup(): boolean {
    for (const group of this.groups) {
      if (group.name === 'members') {
        return true;
      }
    }
    return false;
  }

  setDataSource() {
    this.displayedColumns = this.displayedColumns.filter(x => !this.hideColumns.includes(x));
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filter = this.filter;
    }
  }

  isAllSelected() {
    let numSelected = this.selection.selected.length;

    if (numSelected > 0 && this.hasMembersGroup && this.disableMembers) {
      numSelected++;
    }

    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => {
        if (row.name !== 'members') {
          this.selection.select(row);
        } else if (!this.disableMembers) {
          this.selection.select(row);
        }
      });

    if(this.authType){
      this.removeAuth = this.setAuth();
    }
  }

  checkboxLabel(row?: Group): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  disableSelect(id: number): boolean {
    return this.disableGroups && this.groupsToDisable.has(id);
  }

  ngAfterViewInit(): void {
    if(this.vo === undefined && this.groups.length !== 0) {
      this.vo  = {
        id: this.groups[0].voId,
        beanName: "Vo"
      };
    }

    this.dataSource.paginator = this.paginator;
  }

  onMoveGroup(group: Group) {
    this.moveGroup.emit(group);
  }

  onSyncDetail(rg: RichGroup) {
    const config = getDefaultDialogConfig();
    config.data = {
      groupId: rg.id,
      theme: this.theme
    };
    this.dialog.open(GroupSyncDetailDialogComponent, config);
  }

  onChangeNameDescription(rg: RichGroup) {
    const config = getDefaultDialogConfig();
    config.data = {
      theme: 'group-theme',
      group: rg,
      dialogType: EditFacilityResourceGroupVoDialogOptions.GROUP
    };
    const dialogRef = this.dialog.open(EditFacilityResourceGroupVoDialogComponent, config);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.refreshTable.emit();
      }
    });
  }

  pageChanged(event: PageEvent) {
    this.page.emit(event);
  }

  setAuth(): boolean {
    if (this.authType === 'group-subgroups') {
      return this.selection.selected.reduce((acc, grp) => acc &&
        this.authResolver.isAuthorized('deleteGroup_Group_boolean_policy', [grp]), true);
    } else if (this.authType === 'group-relations') {
      return this.selection.selected.reduce((acc, grp) => acc && this.authResolver.isAuthorized('removeGroupUnion_Group_Group_policy', [this.parentGroup, grp]), true);
    } else if (this.authType === 'vo-groups') {
      return this.selection.selected.reduce((acc, grp) => acc &&
        this.authResolver.isAuthorized('deleteGroup_Group_boolean_policy', [this.vo, grp]), true);
    }
  }

  itemSelectionToggle(item: Group) {
    this.selection.toggle(item);
    this.removeAuth = this.setAuth();
  }

  getCheckboxTooltipMessage() {
    return this.authType === 'create-relation-dialog' ? 'SHARED_LIB.PERUN.COMPONENTS.GROUPS_LIST.CREATE_RELATION_AUTH_TOOLTIP' :
      'SHARED_LIB.PERUN.COMPONENTS.GROUPS_LIST.ALREADY_MEMBER_TOOLTIP'
  }
}
