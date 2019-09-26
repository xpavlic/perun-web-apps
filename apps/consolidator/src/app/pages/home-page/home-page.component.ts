import { Component, OnInit } from '@angular/core';
import { Identity } from '../../models/Identity';
import { MatDialog } from '@angular/material';
import { AddIdentityDialogComponent } from '../../components/add-identity-dialog/add-identity-dialog.component';
import { AuthzService, UsersService } from '@perun-web-apps/perun/services';
import { UserExtSource } from '@perun-web-apps/perun/models';

@Component({
  selector: 'perun-web-apps-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private usersService: UsersService,
    private authzService: AuthzService
  ) { }

  knownIdentities: UserExtSource[];

  // unknownIdentities: Identity[] = [
  //   {
  //     login: '445320@mail.muni.cz'
  //   },
  //   {
  //     login: '445320@mail.muni.cz'
  //   }
  // ];

  ngOnInit() {
    this.authzService.getPerunPrincipal().subscribe(principal => {
      this.usersService.getUserExtSources(principal.userId).subscribe(userExtSources => {
        this.knownIdentities = userExtSources;
      });
    });
  }

  addIdentity() {
    const dialogRef = this.dialog.open(AddIdentityDialogComponent, {width: '700px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
