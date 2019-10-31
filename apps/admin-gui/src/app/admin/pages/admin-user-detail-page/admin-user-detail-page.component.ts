import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SideMenuService} from '../../../core/services/common/side-menu.service';
import {SideMenuItemService} from '../../../shared/side-menu/side-menu-item.service';
import { UsersService } from '@perun-web-apps/perun/services';
import { User } from '@perun-web-apps/perun/models';

@Component({
  selector: 'app-admin-user-detail-page',
  templateUrl: './admin-user-detail-page.component.html',
  styleUrls: ['./admin-user-detail-page.component.scss']
})
export class AdminUserDetailPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private sideMenuService: SideMenuService,
    private sideMenuItemService: SideMenuItemService
  ) { }

  user: User;
  path: string;
  regex: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['userId'];

      this.path = `/admin/users/${userId}`;
      this.regex = `/admin/users/\\d+`;

      this.usersService.getUserById(userId).subscribe(user => {
        this.user = user;

        const userItem = this.sideMenuItemService.parseUser(user, this.path, this.regex);
        this.sideMenuService.setAdminItems([userItem]);
      });
    });
  }
}
