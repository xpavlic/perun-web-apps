import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MembersManagerService,
  UsersManagerService
} from '@perun-web-apps/perun/openapi';
import { NotificatorService, StoreService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, Validators } from '@angular/forms';

export interface CreateSponsoredMemberDialogData {
  entityId?: number
  voId?: number;
  theme: string,
}

@Component({
  selector: 'app-create-sponsored-member-dialog',
  templateUrl: './create-sponsored-member-dialog.component.html',
  styleUrls: ['./create-sponsored-member-dialog.component.scss']
})
export class CreateSponsoredMemberDialogComponent implements OnInit {

  theme: string;
  loading = false;

  namespaceOptions: string[] = [];

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  firstName = new FormControl('', [Validators.required]);

  lastName = new FormControl('', [Validators.required]);

  titleBefore = '';

  titleAfter = '';

  password = new FormControl('', [Validators.required]);

  namespace = new FormControl('', [Validators.required,]);

  login = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required, Validators.pattern(this.emailRegx)]);

  constructor(private dialogRef: MatDialogRef<CreateSponsoredMemberDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: CreateSponsoredMemberDialogData,
              private membersService: MembersManagerService,
              private store: StoreService,
              private notificator: NotificatorService,
              private translate: TranslateService,
              private usersService: UsersManagerService) {
  }

  ngOnInit(): void {
    this.theme = this.data.theme;
    this.parseNamespace();
  }

  parseNamespace(){
    const namespaces = this.store.getLoginAttributeNames();
    for(const namespace of namespaces){
      const index = namespace.lastIndexOf(':');
      if(index !== -1){
        this.namespaceOptions.push(namespace.substring(index + 1, namespace.length));
      }
    }
  }

  onConfirm() {
    this.loading = true;
    this.membersService.createSponsoredMember({
      vo: this.data.voId,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      titleAfter: this.titleAfter,
      titleBefore: this.titleBefore,
      namespace: this.namespace.value,
      password: this.password.value,
      sponsor: this.store.getPerunPrincipal().userId
    }).subscribe(rm => {
      this.usersService.reservePassword(this.login.value, this.namespace.value, this.password.value).subscribe(_ => {
        this.notificator.showSuccess(this.translate.instant('DIALOGS.CREATE_SPONSORED_USER.SUCCESS'));
        this.dialogRef.close(true);
      }, () => this.loading = false);
    }, () => this.loading = false);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
