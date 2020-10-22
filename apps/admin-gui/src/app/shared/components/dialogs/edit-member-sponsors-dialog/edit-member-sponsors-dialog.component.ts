import { Component, Inject, OnInit } from '@angular/core';
import { MembersManagerService, User } from '@perun-web-apps/perun/openapi';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import { MatTableDataSource } from '@angular/material/table';

export interface EditMemberSponsorsDialogComponent {
  theme: string;
  sponsors: User[];
  member: number;
}

@Component({
  selector: 'app-edit-member-sponsors-dialog',
  templateUrl: './edit-member-sponsors-dialog.component.html',
  styleUrls: ['./edit-member-sponsors-dialog.component.scss']
})
export class EditMemberSponsorsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditMemberSponsorsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: EditMemberSponsorsDialogComponent,
              public memberService: MembersManagerService,
              private notificator: NotificatorService,
              private translate: TranslateService) { }

  theme: string;
  sponsors: User[];
  displayedColumns: string[] = ['id', 'name', 'remove'];
  dataSource: MatTableDataSource<User>;
  loading = false;

  sponsorsToRemove: Set<number> = new Set<number>();

  ngOnInit(): void {
    this.theme = this.data.theme;
    this.sponsors = this.data.sponsors;
    this.dataSource = new MatTableDataSource<User>(this.data.sponsors);
  }

  markSponsor(sponsor: User) {
    if (this.sponsorsToRemove.has(sponsor.id)){
      this.sponsorsToRemove.delete(sponsor.id);
    } else {
      this.sponsorsToRemove.add(sponsor.id);
    }
  }

  removeSponsors(sponsorIds: number[]){
    if (sponsorIds.length === 0){
      this.notificator.showSuccess(this.translate.instant('DIALOGS.EDIT_MEMBER_SPONSORS.SUCCESS'));
      this.loading = false;
      this.dialogRef.close(true);
    }

    const sponsorId = sponsorIds.pop();
    this.memberService.removeSponsor(this.data.member, sponsorId).subscribe(() => {
      this.removeSponsors(sponsorIds);
    }, () => this.loading = false);
  }

  onSubmit(){
    this.loading = true;
    const sponsorIds = Array.from(this.sponsorsToRemove);
    this.removeSponsors(sponsorIds);
  }

  onCancel(){
    this.dialogRef.close(false);
  }

}
