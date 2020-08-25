import { Component, Inject, OnInit } from '@angular/core';
import {
  FacilitiesManagerService,
  Facility,
  Group, GroupsManagerService,
  Resource,
  ResourcesManagerService,
  Vo, VosManagerService
} from '@perun-web-apps/perun/openapi';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, Validators } from '@angular/forms';

export enum EditFacilityResourceGroupVoDialogOptions {
  FACILITY,
  RESOURCE,
  VO,
  GROUP
}

export interface EditFacilityResourceGroupVoDialogData {
  theme: string;
  facility: Facility;
  resource: Resource;
  vo: Vo;
  group: Group;
  dialogType: EditFacilityResourceGroupVoDialogOptions;
}

@Component({
  selector: 'app-perun-web-apps-edit-facility-resource-group-vo-dialog',
  templateUrl: './edit-facility-resource-group-vo-dialog.component.html',
  styleUrls: ['./edit-facility-resource-group-vo-dialog.component.scss']
})
export class EditFacilityResourceGroupVoDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditFacilityResourceGroupVoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: EditFacilityResourceGroupVoDialogData,
              private notificator: NotificatorService,
              private translateService: TranslateService,
              private facilitiesManager: FacilitiesManagerService,
              private resourcesManager: ResourcesManagerService,
              private groupsManager: GroupsManagerService,
              private vosManager: VosManagerService) {
  }

  theme: string;
  nameCtrl: FormControl;
  descriptionCtrl: FormControl;
  shortName: string;
  dialogType: EditFacilityResourceGroupVoDialogOptions;
  loading = false;

  ngOnInit(): void {
    this.theme = this.data.theme;
    this.dialogType = this.data.dialogType;
    switch (this.dialogType) {
      case EditFacilityResourceGroupVoDialogOptions.FACILITY:
        this.nameCtrl = new FormControl(this.data.facility.name, [Validators.required, Validators.pattern('.*[\\S]+.*'), Validators.maxLength(129)]);
        this.descriptionCtrl = new FormControl(this.data.facility.description, [Validators.required, Validators.pattern('.*[\\S]+.*'), Validators.maxLength(129)]);
        break;
      case EditFacilityResourceGroupVoDialogOptions.RESOURCE:
        this.nameCtrl = new FormControl(this.data.resource.name, [Validators.required, Validators.pattern('.*[\\S]+.*'), Validators.maxLength(129)]);
        this.descriptionCtrl = new FormControl(this.data.resource.description, [Validators.required, Validators.pattern('.*[\\S]+.*'), Validators.maxLength(129)]);
        break;
      case EditFacilityResourceGroupVoDialogOptions.GROUP:
        this.nameCtrl = new FormControl(this.data.group.name, [Validators.required, Validators.pattern('.*[\\S]+.*'), Validators.maxLength(129)]);
        this.descriptionCtrl = new FormControl(this.data.group.description, [Validators.required, Validators.pattern('.*[\\S]+.*'), Validators.maxLength(129)]);
        break;
      case EditFacilityResourceGroupVoDialogOptions.VO:
        this.shortName = this.data.vo.shortName;
        this.nameCtrl = new FormControl(this.data.vo.name, [Validators.required, Validators.pattern('.*[\\S]+.*'), Validators.maxLength(129)]);
        this.descriptionCtrl = new FormControl();
        break;
    }
  }

  cancel() {
    this.dialogRef.close(false);
  }

  submit() {
    this.loading = true;
    switch (this.dialogType) {
      case EditFacilityResourceGroupVoDialogOptions.FACILITY:
        this.editFacility();
        break;
      case EditFacilityResourceGroupVoDialogOptions.RESOURCE:
        this.editResource();
        break;
      case EditFacilityResourceGroupVoDialogOptions.GROUP:
        this.editGroup();
        break;
      case EditFacilityResourceGroupVoDialogOptions.VO:
        this.editVo();
        break;
    }
  }

  editResource() {
    this.data.resource.name = this.nameCtrl.value;
    this.data.resource.description = this.descriptionCtrl.value;
    this.resourcesManager.updateResource({ resource: this.data.resource }).subscribe(() => {
      this.translateService.get('DIALOGS.EDIT_FACILITY_RESOURCE_GROUP_VO.RESOURCE_SUCCESS').subscribe(message => {
        this.notificator.showSuccess(message);
        this.dialogRef.close(true);
      });
    }, () => this.loading = false);
  }

  editFacility() {
    this.data.facility.name = this.nameCtrl.value;
    this.data.facility.description = this.descriptionCtrl.value;
    this.facilitiesManager.updateFacility({ facility: this.data.facility }).subscribe(() => {
      this.translateService.get('DIALOGS.EDIT_FACILITY_RESOURCE_GROUP_VO.FACILITY_SUCCESS').subscribe(message => {
        this.notificator.showSuccess(message);
        this.dialogRef.close(true);
      });
    }, () => this.loading = false);
  }

  editGroup() {
    this.data.group.name = this.nameCtrl.value;
    this.data.group.description = this.descriptionCtrl.value;
    this.groupsManager.updateGroup({ group: this.data.group }).subscribe(() => {
      this.translateService.get('DIALOGS.EDIT_FACILITY_RESOURCE_GROUP_VO.GROUP_SUCCESS').subscribe(message => {
        this.notificator.showSuccess(message);
        this.dialogRef.close(true);
      });
    }, () => this.loading = false);
  }

  editVo() {
    this.data.vo.name = this.nameCtrl.value;
    this.vosManager.updateVo({ vo: this.data.vo }).subscribe(() => {
      this.translateService.get('DIALOGS.EDIT_FACILITY_RESOURCE_GROUP_VO.VO_SUCCESS').subscribe(message => {
        this.notificator.showSuccess(message);
        this.dialogRef.close(true);
      });
    }, () => this.loading = false);
  }
}
