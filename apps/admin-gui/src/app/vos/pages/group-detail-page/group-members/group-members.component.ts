import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { GuiAuthResolver, MembersService, StoreService } from '@perun-web-apps/perun/services';
import { Urns } from '@perun-web-apps/perun/urns';
import { AddMemberDialogComponent } from '../../../../shared/components/dialogs/add-member-dialog/add-member-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RemoveMembersDialogComponent } from '../../../../shared/components/dialogs/remove-members-dialog/remove-members-dialog.component';
import { Group, GroupsManagerService, RichMember } from '@perun-web-apps/perun/openapi';
import { PageEvent } from '@angular/material/paginator';
import { TABLE_GROUP_MEMBERS, TableConfigService } from '@perun-web-apps/config/table-config';
import { getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import { InviteMemberDialogComponent } from '../../../../shared/components/dialogs/invite-member-dialog/invite-member-dialog.component';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.scss']
})
export class GroupMembersComponent implements OnInit {

  static id = 'GroupMembersComponent';

  // used for router animation
  @HostBinding('class.router-component') true;

  constructor(
    private membersService: MembersService,
    private groupService: GroupsManagerService,
    protected route: ActivatedRoute,
    protected router: Router,
    private tableConfigService: TableConfigService,
    private dialog: MatDialog,
    private guiAuthResolver: GuiAuthResolver,
    private storeService: StoreService
  ) { }

  group: Group;

  members: RichMember[] = null;
  selection: SelectionModel<RichMember>;

  searchString = '';
  firstSearchDone = false;

  loading = false;
  data: 'search' | 'all';

  tableId = TABLE_GROUP_MEMBERS;

  private attrNames = [
    Urns.MEMBER_DEF_ORGANIZATION,
    Urns.MEMBER_DEF_MAIL,
    Urns.USER_DEF_ORGANIZATION,
    Urns.USER_DEF_PREFERRED_MAIL,
    Urns.MEMBER_DEF_EXPIRATION,
    Urns.MEMBER_DEF_GROUP_EXPIRATION
  ];
  pageSize: number;

  addAuth: boolean;
  removeAuth: boolean;
  routeAuth: boolean;
  inviteAuth: boolean;
  hideColumns: String[] = [];


  ngOnInit() {
    this.loading = true;
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.selection = new SelectionModel<RichMember>(true, []);
    this.attrNames = this.attrNames.concat(this.storeService.getLoginAttributeNames());
    this.route.parent.params.subscribe(parentParams => {
      const groupId = parentParams['groupId'];

      this.groupService.getGroupById(groupId).subscribe(group => {
        this.group = group;
        this.setAuthRights();
        this.groupService.getGroupMembersCount(this.group.id).subscribe( count => {
          if(count < 400) {
            this.onListAll();
          }
          this.loading = false;
        }, err => this.loading = false);
      }, err => this.loading = false);
      });
  }

  setAuthRights() {
    this.addAuth = this.guiAuthResolver.isAuthorized('addMembers_Group_List<Member>_policy', [this.group]);
    this.removeAuth = this.guiAuthResolver.isAuthorized('removeMembers_Group_List<Member>_policy', [this.group]);
    this.routeAuth = this.guiAuthResolver.isAuthorized('getMemberById_int_policy', [this.group]);
    this.inviteAuth = this.guiAuthResolver.isAuthorized('group-sendInvitation_Vo_Group_String_String_String_policy', [this.group]);
    this.hideColumns = this.removeAuth ? [] : ['checkbox'];
  }


  onSearchByString() {
    this.data = 'search';
    this.firstSearchDone = true;

    this.refreshTable();
  }

  onListAll() {
    this.data = 'all';
    this.firstSearchDone = true;

   this.refreshTable();
  }

  onAddMember() {
    const config = getDefaultDialogConfig();
    config.width = '1000px';
    config.data = {
      voId: this.group.voId,
      group: this.group,
      entityId: this.group.id,
      theme: 'group-theme',
      type: 'group',
    };

    const dialogRef = this.dialog.open(AddMemberDialogComponent, config);

    dialogRef.afterClosed().subscribe(() => {
      if (this.firstSearchDone) {
        this.refreshTable();
      }
    });
  }

  onKeyInput(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.searchString.length > 0) {
      this.onSearchByString();
    }
  }

  onRemoveMembers() {
    const config = getDefaultDialogConfig();
    config.width = '450px';
    config.data = {
      groupId: this.group.id,
      members: this.selection.selected,
      theme: 'group-theme'
    };

    const dialogRef = this.dialog.open(RemoveMembersDialogComponent, config);

    dialogRef.afterClosed().subscribe(wereMembersDeleted => {
      if (wereMembersDeleted) {
        this.refreshTable();
      }
    });
  }

  onInviteMember(){
    const config = getDefaultDialogConfig();
    config.width = '650px';
    config.data = {
      voId: this.group.voId,
      groupId: this.group.id,
      theme: 'group-theme'
    };

    const dialogRef = this.dialog.open(InviteMemberDialogComponent, config);

    dialogRef.afterClosed().subscribe(inviteSent => {
      if (inviteSent) {
        this.refreshTable();
      }
    });
  }

  refreshTable() {
    this.loading = true;
    this.selection.clear();
    switch (this.data) {
      case 'all': {
        this.membersService.getCompleteRichMembersForGroup(this.group.id, this.attrNames).subscribe(
          members => {
            this.members = members;
            this.setAuthRights();
            this.loading = false;
          },
          () => this.loading = false
        );
        break;
      }
      case 'search': {
        this.membersService.findCompleteRichMembersForGroup(this.group.id, this.searchString, this.attrNames).subscribe(
          members => {
            this.members = members;
            this.setAuthRights();
            this.loading = false;
          },
          () => this.loading = false
        );
        break;
      }
      default: this.loading = false;
    }
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
