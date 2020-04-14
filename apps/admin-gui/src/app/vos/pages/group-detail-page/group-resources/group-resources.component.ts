import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { Group, GroupsManagerService, ResourcesManagerService, RichResource } from '@perun-web-apps/perun/openapi';
import { PageEvent } from '@angular/material/paginator';
import { TableConfigService, TABLE_GROUP_RESOURCES_LIST } from '@perun-web-apps/config/table-config';

@Component({
  selector: 'app-group-resources',
  templateUrl: './group-resources.component.html',
  styleUrls: ['./group-resources.component.scss']
})
export class GroupResourcesComponent implements OnInit {

  static id = 'GroupResourcesComponent';

  // used for router animation
  @HostBinding('class.router-component') true;

  constructor(private resourcesManager: ResourcesManagerService,
              private groupService: GroupsManagerService,
              private tableConfigService: TableConfigService,
              private route: ActivatedRoute) {
  }

  group: Group;
  resources: RichResource[] = null;
  selected = new SelectionModel<RichResource>(true, []);

  loading: boolean;
  filterValue = '';
  pageSize: number;
  tableId = TABLE_GROUP_RESOURCES_LIST;

  ngOnInit() {
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);

    this.route.parent.params.subscribe(parentParams => {
      const groupId = parentParams['groupId'];

      this.groupService.getGroupById(groupId).subscribe(group => {
        this.group = group;

        this.refreshTable();
      });
    });
  }

  refreshTable() {
    this.loading = true;
    this.resourcesManager.getAssignedRichResourcesWithGroup(this.group.id).subscribe(resources => {
      this.resources = resources;
      this.loading = false;
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
