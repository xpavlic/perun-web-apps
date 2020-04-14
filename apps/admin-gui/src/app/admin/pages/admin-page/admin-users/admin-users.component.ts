import { Component, HostBinding, OnInit } from '@angular/core';
import { RichUser, UsersManagerService } from '@perun-web-apps/perun/openapi';
import {
  TABLE_ADMIN_USER_SELECT,
  TableConfigService
} from '@perun-web-apps/config/table-config';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  static id = 'AdminUsersComponent';

  @HostBinding('class.router-component') true;

  constructor(
    private usersService: UsersManagerService,
    private tableConfigService: TableConfigService
  ) { }

  users: RichUser[];

  searchString = '';
  loading = false;
  firstSearchDone = false;
  pageSize: number;
  tableId = TABLE_ADMIN_USER_SELECT;

  ngOnInit() {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
  }

  onSearchByString() {
    this.loading = true;
    this.firstSearchDone = true;
    this.usersService.findRichUsers(this.searchString).subscribe(users => {
      this.users = users;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  onKeyInput(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.searchString.length > 0) {
      this.onSearchByString();
    }
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
