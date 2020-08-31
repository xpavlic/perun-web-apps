import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Group, GroupsManagerService, Member, MembersManagerService } from '@perun-web-apps/perun/openapi';
import { GuiAuthResolver, NotificatorService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import { SelectionModel } from '@angular/cdk/collections';

export interface AddMemberGroupDialogData {
  theme: string;
  memberId: number;
}

@Component({
  selector: 'app-add-member-group-dialog',
  templateUrl: './add-member-group-dialog.component.html',
  styleUrls: ['./add-member-group-dialog.component.scss']
})
export class AddMemberGroupDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddMemberGroupDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: AddMemberGroupDialogData,
              private groupManager: GroupsManagerService,
              private memberManager: MembersManagerService,
              private notificator: NotificatorService,
              private translate: TranslateService,
              private authResolver: GuiAuthResolver) {

  }

  theme: string;
  loading = false;

  member: Member;
  groups: Group[] = [];
  selection = new SelectionModel<Group>(true, []);

  hideColumns = [ 'vo', 'menu' ];
  filterValue = "";

  ngOnInit(): void {
    this.theme = this.data.theme;
    this.loading = true;

    this.memberManager.getMemberById(this.data.memberId).subscribe(member => {
      this.member = member;
      this.groupManager.getAllGroups(this.member.voId).subscribe(groups => {
        this.groups = groups.filter(grp => this.authResolver.isAuthorized('addMember_Group_Member_policy', [grp]));
        this.loading = false;
      }, error => this.loading = false);
    });
  }

  onAdd() {
    const groupIds = this.selection.selected.map(group => group.id);
    this.loading = true;

    this.groupManager.addMember(groupIds, this.member.id).subscribe(() => {
      this.notificator.showSuccess(this.translate.instant('DIALOGS.ADD_MEMBER_GROUP.SUCCESS'));
      this.dialogRef.close(true);
    }, error => this.loading = false);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

}
