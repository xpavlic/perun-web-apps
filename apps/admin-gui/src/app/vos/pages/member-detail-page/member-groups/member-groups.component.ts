import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group, GroupsManagerService } from '@perun-web-apps/perun/openapi';
import { PageEvent } from '@angular/material/paginator';
import { TABLE_MEMBER_DETAIL_GROUPS, TableConfigService } from '@perun-web-apps/config/table-config';

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
    private route: ActivatedRoute
  ) { }

  groups: Group[];
  memberId: number;
  loading: boolean;
  tableId = TABLE_MEMBER_DETAIL_GROUPS;
  filterValue = '';
  pageSize: number;

  ngOnInit() {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.route.parent.params.subscribe(parentParams => {
      this.memberId = parentParams['memberId'];

      this.refreshTable();
    });
  }

  refreshTable() {
    this.loading = true;
    this.groupsService.getMemberGroups(this.memberId).subscribe(groups => {
      this.groups = groups;
      this.loading = false;
    }, () => this.loading = false);
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
