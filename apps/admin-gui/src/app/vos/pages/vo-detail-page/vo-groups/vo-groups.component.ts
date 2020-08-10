import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateGroupDialogComponent } from '../../../../shared/components/dialogs/create-group-dialog/create-group-dialog.component';
import { SideMenuService } from '../../../../core/services/common/side-menu.service';
import { ActivatedRoute } from '@angular/router';
import { DeleteGroupDialogComponent } from '../../../../shared/components/dialogs/delete-group-dialog/delete-group-dialog.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MoveGroupDialogComponent } from '../../../../shared/components/dialogs/move-group-dialog/move-group-dialog.component';
import { applyFilter, getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import {
  Group,
  GroupsManagerService,
  PerunBean,
  RichGroup,
  Vo,
  VosManagerService
} from '@perun-web-apps/perun/openapi';
import { GroupFlatNode } from '@perun-web-apps/perun/models';
import { TABLE_VO_GROUPS, TableConfigService } from '@perun-web-apps/config/table-config';
import { PageEvent } from '@angular/material/paginator';
import { Urns } from '@perun-web-apps/perun/urns';
import { GuiAuthResolver } from '@perun-web-apps/perun/services';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-vo-groups',
  templateUrl: './vo-groups.component.html',
  styleUrls: ['./vo-groups.component.scss']
})
export class VoGroupsComponent implements OnInit {

  static id = 'VoGroupsComponent';

  @HostBinding('class.router-component') true;

  constructor(
    private dialog: MatDialog,
    private groupService: GroupsManagerService,
    private sideMenuService: SideMenuService,
    private voService: VosManagerService,
    private route: ActivatedRoute,
    private tableConfigService: TableConfigService,
    public guiAuthResolver: GuiAuthResolver
  ) { }

  vo: Vo;

  groups: RichGroup[] = [];
  filteredGroups: RichGroup[] = [];
  filteredTreeGroups: RichGroup[] = [];
  showGroupList = false;
  selected = new SelectionModel<RichGroup>(true, []);
  loading: boolean;
  filtering = false;
  tableId = TABLE_VO_GROUPS;
  pageSize: number;

  @ViewChild('toggle', {static: true})
  toggle: MatSlideToggle;

  onCreateGroup() {
    const config = getDefaultDialogConfig();
    config.width = '450px';
    config.data = {voId: this.vo.id, parentGroup: null};

    const dialogRef = this.dialog.open(CreateGroupDialogComponent, config);

    dialogRef.afterClosed().subscribe((success) => {
      if (success) {
        this.loadAllGroups();
      }
    });
  }

  ngOnInit() {
    this.loading = true;
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    if (localStorage.getItem('preferedValue') === 'list') {
      this.toggle.toggle();
      this.selected.clear();
      this.showGroupList = true;
    }
    this.toggle.change.subscribe(() => {
      const value = this.toggle.checked ? 'list' : 'tree';
      localStorage.setItem('preferedValue', value);
      this.loadAllGroups();
    });

    this.route.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        this.loadAllGroups();
      });
    });
  }

  deleteGroup() {
    const config = getDefaultDialogConfig();
    config.width = '450px';
    config.data = {voId: this.vo.id, groups: this.selected.selected};

    const dialogRef = this.dialog.open(DeleteGroupDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadAllGroups();
      }
    });
  }

  removeAllGroups() {
    this.selected.clear();
  }

  onMoveGroup(group: GroupFlatNode | Group) {
    const config = getDefaultDialogConfig();
    config.width = '550px';
    config.data = {
      group: group,
      theme: 'vo-theme'
    };

    const dialogRef = this.dialog.open(MoveGroupDialogComponent, config);
    dialogRef.afterClosed().subscribe(groupMoved => {
      if (groupMoved) {
        this.loadAllGroups();
      }
    });
  }

  loadAllGroups() {
    this.loading = true;
    this.groupService.getAllRichGroupsWithAttributesByNames(this.vo.id, [
      Urns.GROUP_SYNC_ENABLED,
      Urns.GROUP_LAST_SYNC_STATE,
      Urns.GROUP_LAST_SYNC_TIMESTAMP,
      Urns.GROUP_STRUCTURE_SYNC_ENABLED,
      Urns.GROUP_LAST_STRUCTURE_SYNC_STATE,
      Urns.GROUP_LAST_STRUCTURE_SYNC_TIMESTAMP
    ]).subscribe(groups => {
      this.groups = groups;
      this.filteredGroups = groups;
      this.filteredTreeGroups = groups;
      this.selected.clear();
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    const results = applyFilter(filterValue, this.groups);
    this.filteredGroups = results[0];
    this.filteredTreeGroups = results[1];
    this.filtering = filterValue !== '';
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
