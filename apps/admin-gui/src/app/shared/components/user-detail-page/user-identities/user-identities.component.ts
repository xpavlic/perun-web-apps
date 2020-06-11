import { Component, OnInit } from '@angular/core';
import {
  RegistrarManagerService,
  RichUserExtSource,
  UserExtSource,
  UsersManagerService
} from '@perun-web-apps/perun/openapi';
import { StoreService } from '@perun-web-apps/perun/services';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { RemoveUserExtSourceDialogComponent } from '@perun-web-apps/perun/components';
import { AddUserExtSourceDialogComponent } from '../../dialogs/add-user-ext-source-dialog/add-user-ext-source-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-identities',
  templateUrl: './user-identities.component.html',
  styleUrls: ['./user-identities.component.scss']
})
export class UserIdentitiesComponent implements OnInit {

  userExtSources: RichUserExtSource[] = [];
  selection: SelectionModel<UserExtSource> = new SelectionModel<UserExtSource>(false, []);
  userId: number;
  hiddenColumns = ['mail']

  constructor(private usersManagerService: UsersManagerService,
              private storage: StoreService,
              private registrarManagerService: RegistrarManagerService,
              private dialog:MatDialog,
              protected route: ActivatedRoute) { }

  ngOnInit() {
   this.route.parent.params.subscribe(params => {
     this.userId = params['userId']
   })
    this.usersManagerService.getRichUserExtSources(this.userId).subscribe(userExtSources =>{
      this.userExtSources = userExtSources;
    })
  }

  addIdentity() {
    const dialogRef = this.dialog.open(AddUserExtSourceDialogComponent, {
      width: '600px',
      data: {},
    });
  }

  removeIdentity() {
    const dialogRef = this.dialog.open(RemoveUserExtSourceDialogComponent,{
      width: '600px',
      data: {
        extSources: this.selection.selected
      },

    });
  }
}
