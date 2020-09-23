import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {
  Application, Member, MembersManagerService,
  RegistrarManagerService
} from '@perun-web-apps/perun/openapi';
import {
  TABLE_MEMBER_APPLICATIONS_DETAILED,
  TABLE_MEMBER_APPLICATIONS_NORMAL,
  TableConfigService
} from '@perun-web-apps/config/table-config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-applications',
  templateUrl: './member-applications.component.html',
  styleUrls: ['./member-applications.component.scss']
})
export class MemberApplicationsComponent implements OnInit {

  constructor(private registrarManager: RegistrarManagerService,
              private memberManager: MembersManagerService,
              private tableConfigService: TableConfigService,
              protected route: ActivatedRoute) { }


  loading = false;
  applications: Application[] = [];
  memberId: number;
  member: Member;
  displayedColumns: string[] = ['id', 'createdAt', 'type', 'state', 'user', 'group', 'modifiedBy'];
  filterValue = '';
  showAllDetails = false;
  detailPageSize: number;
  pageSize: number;
  detailTableId = TABLE_MEMBER_APPLICATIONS_DETAILED;
  tableId = TABLE_MEMBER_APPLICATIONS_NORMAL;


  ngOnInit(): void {
    this.detailPageSize = this.tableConfigService.getTablePageSize(this.detailTableId);
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.loading = true;
    this.route.parent.params.subscribe(parentParams => {
      this.memberId = parentParams['memberId'];

      this.memberManager.getMemberById(this.memberId).subscribe(member => {
        this.member = member;
      });

      this.registrarManager.getApplicationsForMember(this.memberId).subscribe(applications => {
        this.applications = applications;
        this.loading = false;
      });
    });
  }

  refreshTable(){
    this.loading = true;
    this.registrarManager.getApplicationsForMember(this.memberId).subscribe(applications => {
      this.applications = applications;
      this.loading = false;
    });
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
