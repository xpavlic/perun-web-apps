import { Component, OnInit } from '@angular/core';
import { AuthResolverService } from '../../../core/services/common/auth-resolver.service';
import { SideMenuService } from '../../../core/services/common/side-menu.service';
import { UsersService } from '@perun-web-apps/perun/services';
import { PerunPrincipal, User } from '@perun-web-apps/perun/models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    public authResolver: AuthResolverService,
    private usersService: UsersService,
    private sideMenuService: SideMenuService,
  ) {
  }

  principal: PerunPrincipal;
  user: User;
  path = `/profile`;
  regex = `/profile`;

  ngOnInit() {
    this.principal = this.authResolver.getPerunPrincipal();
    this.user = this.principal.user;

    this.sideMenuService.setUserItems([]);
  }
}
