import {Component, HostBinding, OnInit} from '@angular/core';
import {SideMenuService} from '../../../../../core/services/common/side-menu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from '@perun-web-apps/perun/models';
import { GuiAuthResolver, MembersService } from '@perun-web-apps/perun/services';
import { Member, MembersManagerService, Vo, VosManagerService } from '@perun-web-apps/perun/openapi';

@Component({
  selector: 'app-member-settings-overview',
  templateUrl: './member-settings-overview.component.html',
  styleUrls: ['./member-settings-overview.component.scss']
})
export class MemberSettingsOverviewComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VosManagerService,
    private memberService: MembersManagerService,
    protected route: ActivatedRoute,
    private authResolver: GuiAuthResolver
  ) {
  }

  items: MenuItem[] = [];
  vo: Vo;
  member: Member;
  loading = false;

  ngOnInit() {
    this.loading = true;
    this.route.parent.parent.params.subscribe(grandParentParams => {
      const voId = grandParentParams['voId'];
      const memberId = grandParentParams['memberId'];
      this.memberService.getMemberById(memberId).subscribe(member => {
        this.member = member;

        this.voService.getVoById(voId).subscribe(vo => {
          this.vo = vo;

          this.initItems();
          this.loading = false;
        }, () => this.loading = false);
      }, () => this.loading = false);
    });
  }

  private initItems() {
    this.items = [];

    // Resource attributes
    if(this.authResolver.isAuthorized('getAllowedResources_Member_policy', [this.vo])){
      this.items.push(
        {
          cssIcon: 'perun-attributes',
          url: `/organizations/${this.vo.id}/members/${this.member.id}/settings/resourceAttributes`,
          label: 'MENU_ITEMS.MEMBER.RESOURCE_ATTRIBUTES',
          style: 'member-btn'
        });
    }
    // Group attributes
    if(this.authResolver.isAuthorized('getMemberGroups_Member_policy', [this.vo])){
      this.items.push(
        {
          cssIcon: 'perun-attributes',
          url: `/organizations/${this.vo.id}/members/${this.member.id}/settings/groupAttributes`,
          label: 'MENU_ITEMS.MEMBER.GROUP_ATTRIBUTES',
          style: 'member-btn'
        });
    }
  }
}
