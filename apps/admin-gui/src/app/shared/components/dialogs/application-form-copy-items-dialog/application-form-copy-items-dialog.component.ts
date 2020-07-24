import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  Group,
  GroupsManagerService,
  RegistrarManagerService,
  Vo,
  VosManagerService
} from '@perun-web-apps/perun/openapi';
import { ApiRequestConfigurationService, NotificatorService } from '@perun-web-apps/perun/services';

export interface ApplicationFormCopyItemsDialogData {
  voId: number;
  groupId: number;
  theme: string;
}

@Component({
  selector: 'app-application-form-copy-items-dialog',
  templateUrl: './application-form-copy-items-dialog.component.html',
  styleUrls: ['./application-form-copy-items-dialog.component.scss']
})
export class ApplicationFormCopyItemsDialogComponent implements OnInit {

  successMessage: string;

  vos: Vo[] = [];
  groups: Group[] = [];
  fakeGroup: Group;
  voControl = new FormControl();
  filteredVos: Observable<Vo[]>;
  groupControl = new FormControl();
  filteredGroups: Observable<Group[]>;
  emptyFormMessage: string;
  noFormMessage: string;
  theme: string;
  loading = false;

  constructor(private dialogRef: MatDialogRef<ApplicationFormCopyItemsDialogComponent>,
              private voService: VosManagerService,
              private groupService: GroupsManagerService,
              private translateService: TranslateService,
              private registrarManager: RegistrarManagerService,
              private notificatorService: NotificatorService,
              private apiRequest: ApiRequestConfigurationService,
              @Inject(MAT_DIALOG_DATA) public data: ApplicationFormCopyItemsDialogData) {
    translateService.get('DIALOGS.APPLICATION_FORM_COPY_ITEMS.SUCCESS').subscribe(res => this.successMessage = res);
    translateService.get('DIALOGS.APPLICATION_FORM_COPY_ITEMS.EMPTY').subscribe(res => this.emptyFormMessage = res);
    translateService.get('DIALOGS.APPLICATION_FORM_COPY_ITEMS.NO_FORM').subscribe(res => this.noFormMessage = res);
  }

  ngOnInit() {
    this.loading = true;
    this.theme = this.data.theme;
    this.translateService.get('DIALOGS.APPLICATION_FORM_COPY_ITEMS.NO_GROUP_SELECTED').subscribe( text => {
      this.fakeGroup = {
        id: -1,
        name: text,
        voId: 0,
        parentGroupId: 0,
        shortName: '',
        description: '',
        beanName: 'Group'
      };

      this.voService.getAllVos().subscribe(vos => {
        this.vos = vos;

        this.voControl = new FormControl('', [this.invalidVo(this.vos), Validators.required]);

        this.filteredVos = this.voControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filterVo(name) : this.vos.slice())
          );

        this.vos = vos.sort(((vo1, vo2) => {
          if (vo1.name > vo2.name) {
            return 1;
          }

          if (vo1.name < vo2.name) {
            return -1;
          }

          return 0;
        }));
      }, () => this.loading = false);
      this.loading = false;
    }, () => this.loading = false);
  }

  cancel() {
    this.dialogRef.close(false);
  }

  _filterVo(value: string): Vo[] {
    const filterValue = value.toLowerCase();

    return this.vos.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  _filterGroup(value: string): Group[] {
    const filterValue = value.toLowerCase();

    return this.groups.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(entity?: any): string | undefined {
    return entity ? entity.name : undefined;
  }

  submit() {
    this.apiRequest.dontHandleErrorForNext();
    this.loading = true;
    if (this.data.groupId) { // checking if the dialog is for group or Vo
      if (this.groupControl.value === this.fakeGroup) {   // no group selected
        this.registrarManager.getFormItemsForVo(this.voControl.value.id).subscribe(formItems => {
          if (formItems.length) {
            this.registrarManager.copyFormFromVoToGroup(this.voControl.value.id, this.data.groupId).subscribe(() => {
              this.notificatorService.showSuccess(this.successMessage);
              this.dialogRef.close(true);
            });
          } else {
            this.notificatorService.showError(this.emptyFormMessage);
          }
          this.loading = false;
        }, error => {
          if(error.error.name === 'FormNotExistsException'){
            this.notificatorService.showError(this.noFormMessage);
          }
          this.loading = false;
        });
      } else {
        this.registrarManager.getFormItemsForGroup(this.groupControl.value.id).subscribe(formItems => {
          if (formItems.length) {
            this.registrarManager.copyFormFromGroupToGroup(this.groupControl.value.id, this.data.groupId).subscribe(() => {
              this.notificatorService.showSuccess(this.successMessage);
              this.dialogRef.close(true);
            });
          } else {
            this.notificatorService.showError(this.emptyFormMessage);
          }
          this.loading = false;
        }, error => {
          if(error.error.name === 'FormNotExistsException'){
            this.notificatorService.showError(this.noFormMessage);
          }
          this.loading = false;
        });
      }
    } else {
      if (this.groupControl.value === this.fakeGroup) {       // no group selected
        this.registrarManager.getFormItemsForVo(this.voControl.value.id).subscribe(formItems => {
          if (formItems.length) {
            this.registrarManager.copyFormFromVoToVo(this.voControl.value.id, this.data.voId).subscribe(() => {
              this.notificatorService.showSuccess(this.successMessage);
              this.dialogRef.close(true);
            });
          } else {
            this.notificatorService.showError(this.emptyFormMessage);
          }
          this.loading = false;
        }, error => {
          if(error.error.name === 'FormNotExistsException'){
            this.notificatorService.showError(this.noFormMessage);
          }
          this.loading = false;
        });
      } else {
        this.registrarManager.getFormItemsForGroup(this.groupControl.value.id).subscribe(formItems => {
          if (formItems.length) {
            this.registrarManager.copyFormFromGroupToVo(this.groupControl.value.id, this.data.voId).subscribe(() => {
              this.notificatorService.showSuccess(this.successMessage);
              this.dialogRef.close(true);
            });
          } else {
            this.notificatorService.showError(this.emptyFormMessage);
          }
          this.loading = false;
        }, error => {
          if(error.error.name === 'FormNotExistsException'){
            this.notificatorService.showError(this.noFormMessage);
          }
          this.loading = false;
        });
      }
    }
  }

  getGroups() {
    this.groupControl.reset(this.fakeGroup);
    if (!this.voControl.invalid) {
      this.groupService.getAllGroups(this.voControl.value.id).subscribe(groups => {
        this.groups = [this.fakeGroup].concat(groups);
        this.groupControl.setValidators([this.invalidGroup(this.groups), Validators.required]);
        this.filteredGroups = this.groupControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filterGroup(name) : this.groups.slice())
          );
      });
    } else {
      this.groups = [this.fakeGroup];
    }
  }

  invalidVo(vos: Vo[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let invalid = false;
      if (control.value) {
        if (control.value.beanName) {
          if (control.value.beanName !== 'Vo') {
            invalid = true;
          }
        } else {
          const vo = vos.find(x => x.name.toLowerCase() === control.value.toLowerCase());
          if (!vo) {
            invalid = true;
          } else {
            control.setValue(vo);
          }
        }
      }
      return invalid ? { 'invalidVo': true } : null;
    };
  }

  invalidGroup(groups: Group[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let invalid = false;
      if (control.value) {
        if (control.value.beanName) {
          if (control.value.beanName !== 'Group') {
            invalid = true;
          }
        } else if (control.value === this.fakeGroup) {
          invalid = false;
        } else {
          const group = groups.find(x => x.name.toLowerCase() === control.value.toLowerCase());
          if (!group) {
            invalid = true;
          } else {
            control.setValue(group);
          }
        }
      }
      return invalid ? { 'invalidGroup': true } : null;
    };
  }
}
