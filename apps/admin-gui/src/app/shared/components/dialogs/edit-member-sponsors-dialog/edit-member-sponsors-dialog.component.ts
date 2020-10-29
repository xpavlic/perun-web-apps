import { Component, Inject, OnInit } from '@angular/core';
import { Member, MembersManagerService, Sponsor } from '@perun-web-apps/perun/openapi';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GuiAuthResolver, NotificatorService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import { MatTableDataSource } from '@angular/material/table';

export interface EditMemberSponsorsDialogComponent {
  theme: string;
  sponsors: Sponsor[];
  member: Member;
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
              private authResolver: GuiAuthResolver,
              private translate: TranslateService) { }

  theme: string;
  sponsors: Sponsor[];
  displayedColumns: string[] = ['id', 'name', 'remove'];
  dataSource: MatTableDataSource<Sponsor>;
  loading = false;

  sponsorsToRemove: Set<number> = new Set<number>();

  ngOnInit(): void {
    this.theme = this.data.theme;
    this.sponsors = this.data.sponsors;
    this.dataSource = new MatTableDataSource<Sponsor>(this.data.sponsors);
  }

  markSponsor(sponsor: Sponsor) {
    if (this.sponsorsToRemove.has(sponsor.user.id)){
      this.sponsorsToRemove.delete(sponsor.user.id);
    } else {
      this.sponsorsToRemove.add(sponsor.user.id);
    }
  }

  removeSponsors(sponsorIds: number[]){
    if (sponsorIds.length === 0){
      this.notificator.showSuccess(this.translate.instant('DIALOGS.EDIT_MEMBER_SPONSORS.SUCCESS'));
      this.loading = false;
      this.dialogRef.close(true);
    }

    const sponsorId = sponsorIds.pop();
    this.memberService.removeSponsor(this.data.member.id, sponsorId).subscribe(() => {
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

  isAuthorized(sponsor: Sponsor) {
    return this.authResolver.isAuthorized('sponsored-removeSponsor_Member_User_policy', [this.data.member])
    && this.authResolver.isAuthorized('sponsor-removeSponsor_Member_User_policy', [sponsor.user]);
  }
}
