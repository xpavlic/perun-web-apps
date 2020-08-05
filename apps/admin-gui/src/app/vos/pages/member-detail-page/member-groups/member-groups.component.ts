import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group, GroupsManagerService } from '@perun-web-apps/perun/openapi';
import { PageEvent } from '@angular/material/paginator';
import { TABLE_MEMBER_DETAIL_GROUPS, TableConfigService } from '@perun-web-apps/config/table-config';
import { SelectionModel } from '@angular/cdk/collections';
import { getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberGroupDialogComponent } from '../../../../shared/components/dialogs/add-member-group-dialog/add-member-group-dialog.component';
import { RemoveMemberGroupDialogComponent } from '../../../../shared/components/dialogs/remove-member-group-dialog/remove-member-group-dialog.component';

@Component({
  selector: 'app-member-groups',
  templateUrl: './member-groups.component.html',
  styleUrls: ['./member-groups.component.scss']
})
export class MemberGroupsComponent implements OnInit {

  static id = 'MemberGroupsComponent';

  // used for router animation
  @HostBinding('class.router-component') true;

  constructor(
    private groupsService: GroupsManagerService,
    private tableConfigService: TableConfigService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  groups: Group[];
  memberId: number;

  loading: boolean;
  filterValue = '';

  tableId = TABLE_MEMBER_DETAIL_GROUPS;
  pageSize: number;
  selection = new SelectionModel<Group>(true, []);

  ngOnInit() {
    this.loading = true;
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.route.parent.params.subscribe(parentParams => {
      this.memberId = parentParams['memberId'];

      this.refreshTable();
    });
  }

  refreshTable() {
    this.loading = true;
    this.groupsService.getMemberGroups(this.memberId).subscribe(groups => {
      this.selection.clear();
      this.filterValue = '';
      this.groups = groups;
      this.loading = false;
    }, () => this.loading = false);
  }

  addGroup(){
    const config = getDefaultDialogConfig();
    config.width = "850px";
    config.data = {
      memberId: this.memberId,
      theme: "member-theme"
    };

    const dialogRef = this.dialog.open(AddMemberGroupDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  removeGroup(){
    const config = getDefaultDialogConfig();
    config.width = "650px";
    config.data = {
      memberId: this.memberId,
      groups: this.selection.selected,
      theme: "member-theme"
    };

    const dialogRef = this.dialog.open(RemoveMemberGroupDialogComponent, config);

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
