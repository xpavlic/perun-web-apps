import { Component, Inject, OnInit } from '@angular/core';
import { ExtSource, ExtSourcesManagerService, UsersManagerService} from '@perun-web-apps/perun/openapi';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface AddUserExtSourceDialogData {
  theme: string;
}

@Component({
  selector: 'app-add-user-ext-source-dialog',
  templateUrl: './add-user-ext-source-dialog.component.html',
  styleUrls: ['./add-user-ext-source-dialog.component.scss']
})
export class AddUserExtSourceDialogComponent implements OnInit {

  extSources: ExtSource[] = [];
  filteredExtSources: Observable<ExtSource[]>;
  loas = [0,1,2,3]
  loa = 0;
  loginControl: FormControl;
  extSourcesControl: FormControl;
  loading: boolean;
  successMessage: string;
  selectedIdentity: ExtSource;
  theme: string;

  constructor(private dialogRef: MatDialogRef<AddUserExtSourceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: AddUserExtSourceDialogData,
              private extSourcesManagerService: ExtSourcesManagerService,
              private usersManagerService: UsersManagerService,
              private translate: TranslateService,
              private notificator: NotificatorService,) { }

  ngOnInit(): void {
    this.theme = this.data.theme;
    this.loginControl = new FormControl(null, [Validators.required]);
    this.extSourcesControl = new FormControl('', [Validators.required]);
    this.filteredExtSources = this.extSourcesControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.extSourcesManagerService.getExtSources().subscribe(extSources => {
      this.extSources = extSources;
      this.selectedIdentity = extSources[0];

      this.filteredExtSources = this.extSourcesControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    })
  }

  displayFn(extSource?: ExtSource): string | undefined {
    return extSource ? extSource.name : null;
  }

  onCancel(){
    this.dialogRef.close(false);
  }

  onAdd(){
    // this.loading = true;
    console.log(this.extSourcesControl.value);
  }

  private _filter(value:  string |ExtSource): ExtSource[] {
    const filterValue = typeof (value) === 'string' ? value.toLowerCase() : value.name.toLowerCase;
    return this.extSources.filter(option => option.name.toLowerCase().includes(<string>filterValue));
  }



}
