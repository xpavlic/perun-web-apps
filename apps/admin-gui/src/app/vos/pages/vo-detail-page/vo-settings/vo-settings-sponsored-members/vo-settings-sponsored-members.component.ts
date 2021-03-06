import { Component, OnInit } from '@angular/core';
import { AuthzResolverService, MembersManagerService, MemberWithSponsors, Vo } from '@perun-web-apps/perun/openapi';
import { ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { TABLE_SPONSORED_MEMBERS, TableConfigService } from '@perun-web-apps/config/table-config';
import { MatDialog } from '@angular/material/dialog';
import { getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import { CreateSponsoredMemberDialogComponent } from '../../../../../shared/components/dialogs/create-sponsored-member-dialog/create-sponsored-member-dialog.component';
import { GenerateSponsoredMembersDialogComponent } from '../../../../../shared/components/dialogs/generate-sponsored-members-dialog/generate-sponsored-members-dialog.component';
import { GuiAuthResolver, StoreService } from '@perun-web-apps/perun/services';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-vo-settings-sponsored-members',
  templateUrl: './vo-settings-sponsored-members.component.html',
  styleUrls: ['./vo-settings-sponsored-members.component.scss']
})
export class VoSettingsSponsoredMembersComponent implements OnInit {

  constructor(private membersManager: MembersManagerService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private authResolver: GuiAuthResolver,
              private tableConfigService: TableConfigService,
              private storeService: StoreService,
              private authzResolver: AuthzResolverService) {
  }

  voId: number;
  vo: Vo;
  members: MemberWithSponsors[] = [];

  createAuth: boolean;
  generateAuth: boolean;
  routeAuth: boolean;

  //TODO uncomment when we need those parameters
  private attrNames = [
    //Urns.USER_DEF_ORGANIZATION,
    //Urns.USER_DEF_PREFERRED_MAIL,
    //Urns.MEMBER_DEF_ORGANIZATION,
    //Urns.MEMBER_DEF_MAIL,
    //Urns.MEMBER_DEF_EXPIRATION
  ];

  selection = new SelectionModel<MemberWithSponsors>(true, []);
  searchString = '';
  loading = false;
  pageSize: number;
  tableId = TABLE_SPONSORED_MEMBERS;

  ngOnInit(): void {
    this.loading = true;
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.route.parent.params.subscribe(parentParentParams => {
      this.voId = parentParentParams ['voId'];
      this.vo = {
        id: this.voId,
        beanName: 'Vo'
      };
      this.setAuthRights();
      this.refresh();
    });
  }

  setAuthRights() {
    this.createAuth = this.authResolver.isAuthorized('createSponsoredMember_Vo_String_Map<String_String>_String_User_LocalDate_policy',
      [this.vo, this.storeService.getPerunPrincipal().user]);
    this.generateAuth = this.authResolver.isAuthorized('createSponsoredMembers_Vo_String_List<String>_User_policy',
      [this.vo, this.storeService.getPerunPrincipal().user]);
    if (this.members!== null && this.members.length !== 0){
      this.routeAuth = this.authResolver.isAuthorized('getMemberById_int_policy', [this.vo, this.members[0].member]);
    }
  }

  onCreate(): void {
    const config = getDefaultDialogConfig();
    config.width = '500px';
    config.data = {
      entityId: this.voId,
      voId: this.voId,
      theme: 'vo-theme'
    };

    const dialogRef = this.dialog.open(CreateSponsoredMemberDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loading = true;
        this.authzResolver.getPerunPrincipal().subscribe(principal => {
          this.storeService.setPerunPrincipal(principal);
          this.refresh();
        });
      }
    });
  }

  onGenerate() {
    const config = getDefaultDialogConfig();
    config.width = '650px';
    config.data = {
      voId: this.voId,
      theme: 'vo-theme',
    };

    const dialogRef = this.dialog.open(GenerateSponsoredMembersDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {

      if(result){
        this.loading = true;
        this.authzResolver.getPerunPrincipal().subscribe(principal => {
          this.storeService.setPerunPrincipal(principal);
          this.refresh();
        });
      }
    });
  }

  refresh() {
    this.loading = true;
    this.membersManager.getSponsoredMembersAndTheirSponsors(this.voId, this.attrNames).subscribe(members => {
      this.selection.clear();
      this.members = members;
      this.setAuthRights();
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    this.searchString = filterValue;
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
