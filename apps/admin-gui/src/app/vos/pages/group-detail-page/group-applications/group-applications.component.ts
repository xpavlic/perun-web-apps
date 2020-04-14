import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application, Group, GroupsManagerService, RegistrarManagerService } from '@perun-web-apps/perun/openapi';
import { PageEvent } from '@angular/material/paginator';
import {
  TABLE_GROUP_APPLICATIONS_DETAILED,
  TABLE_GROUP_APPLICATIONS_NORMAL,
  TableConfigService
} from '@perun-web-apps/config/table-config';

@Component({
  selector: 'app-group-applications',
  templateUrl: './group-applications.component.html',
  styleUrls: ['./group-applications.component.scss']
})
export class GroupApplicationsComponent implements OnInit {

  static id = 'GroupApplicationsComponent';

  // used for router animation
  @HostBinding('class.router-component') true;

  constructor(private groupService: GroupsManagerService,
              private registrarManager: RegistrarManagerService,
              private tableConfigService: TableConfigService,
              protected route: ActivatedRoute) { }

  state = 'pending';
  loading = false;
  applications: Application[] = [];
  group: Group;
  displayedColumns: string[] = ['id', 'createdAt', 'type', 'state', 'user', 'extSourceLoa', 'modifiedBy'];
  filterValue = '';
  showAllDetails = false;
  detailPageSize: number;
  pageSize: number;
  detailTableId = TABLE_GROUP_APPLICATIONS_DETAILED;
  tableId = TABLE_GROUP_APPLICATIONS_NORMAL;

  ngOnInit() {
    this.detailPageSize = this.tableConfigService.getTablePageSize(this.detailTableId);
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.loading = true;
    this.route.parent.params.subscribe(parentParams => {
      const groupId = parentParams['groupId'];
      this.groupService.getGroupById(groupId).subscribe( group => {
        this.group = group;
        this.setData(['NEW', 'VERIFIED']);
      });
    });
  }


  setData(state: string[]) {
    this.registrarManager.getApplicationsForGroup(this.group.id, state).subscribe(applications => {
      this.applications = applications;
      this.loading = false;
    });
  }

  select() {
    this.loading = true;
    switch (this.state) {
      case 'approved': {
        this.setData(['APPROVED']);
        break;
      }
      case 'rejected': {
        this.setData(['REJECTED']);
        break;
      }
      case 'wfmv': {
        this.setData(['NEW']);
        break;
      }
      case 'submited': {
        this.setData(['VERIFIED']);
        break;
      }
      case 'pending': {
        this.setData(['NEW', 'VERIFIED']);
        break;
      }
      case 'all': {
        this.registrarManager.getApplicationsForGroup(this.group.id).subscribe(applications => {
          this.applications = applications;
          this.loading = false;
        });
        break;
      }
      default: {
        break;
      }
    }
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  detailPageChanged(event: PageEvent) {
    this.detailPageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.detailTableId, event.pageSize);
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
