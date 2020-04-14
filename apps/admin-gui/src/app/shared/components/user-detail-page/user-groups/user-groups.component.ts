import { Component, HostBinding, OnInit } from '@angular/core';
import { MembersService, StoreService } from '@perun-web-apps/perun/services';
import { Group, GroupsManagerService, PerunPrincipal, UsersManagerService, Vo } from '@perun-web-apps/perun/openapi';
import {
  TABLE_USER_DETAIL_ADMIN_GROUPS,
  TABLE_USER_DETAIL_MEMBER_GROUPS,
  TableConfigService
} from '@perun-web-apps/config/table-config';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {

  @HostBinding('class.router-component') true;

  loading = false;
  principal: PerunPrincipal;
  vos: Vo[] = [];
  membersGroups: Group[] = [];
  adminsGroups: Group[] = [];

  tableId = TABLE_USER_DETAIL_MEMBER_GROUPS;
  pageSize: number;

  adminTableId = TABLE_USER_DETAIL_ADMIN_GROUPS;
  adminPageSize: number;

  constructor(private usersService: UsersManagerService,
              private memberService: MembersService,
              private tableConfigService: TableConfigService,
              private groupService: GroupsManagerService,
              private store: StoreService) { }

  ngOnInit() {
    this.loading = true;
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.adminPageSize = this.tableConfigService.getTablePageSize(this.adminTableId);
    this.principal = this.store.getPerunPrincipal();
    this.refreshTable();
  }

  refreshTable() {
    this.loading = true;
    this.membersGroups = [];
    this.usersService.getVosWhereUserIsMember(this.principal.userId).subscribe(vos => {
      this.vos = vos;
      for(const vo of this.vos) {
        this.memberService.getMemberByUser(vo.id, this.principal.userId).subscribe( member => {
          this.groupService.getMemberGroups(member.id).subscribe( groups => {
            this.membersGroups = this.membersGroups.concat(groups);
          });
        });
      }
      this.loading = false;
    });
    this.usersService.getGroupsWhereUserIsAdmin(this.principal.userId).subscribe( groups => {
      this.adminsGroups = groups;
    });
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
  adminPageChanged(event: PageEvent) {
    this.adminPageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.adminTableId, event.pageSize);
  }
}
