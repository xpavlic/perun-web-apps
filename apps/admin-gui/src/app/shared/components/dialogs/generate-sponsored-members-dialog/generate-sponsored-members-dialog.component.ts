import { AfterViewInit, Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MembersManagerService } from '@perun-web-apps/perun/openapi';
import { NotificatorService, StoreService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableExporterDirective } from 'mat-table-exporter';

export interface GenerateSponsoredMembersDialogData {
  voId: number;
  theme: string,
}

@Component({
  selector: 'app-generate-sponsored-members-dialog',
  templateUrl: './generate-sponsored-members-dialog.component.html',
  styleUrls: ['./generate-sponsored-members-dialog.component.scss']
})
export class GenerateSponsoredMembersDialogComponent implements OnInit, AfterViewInit {

  @ViewChild('exporter', {})
  exporter: MatTableExporterDirective;

  @Output()
  page = new EventEmitter<PageEvent>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  theme: string;
  loading = false;
  dataSource: MatTableDataSource<{name: string, status: string, login: string, passwd: string}> =
    new MatTableDataSource<{name: string; status: string; login: string; passwd: string}>();
  outputColumns = ['name', 'status', 'login', 'password'];

  notEmptyRegex = /.*\S.*/;

  namespaceOptions: string[] = [];
  namespace: FormControl = new FormControl('', Validators.required);
  sponsoredMembers: FormControl = new FormControl('', [Validators.required, Validators.pattern(this.notEmptyRegex)]);

  constructor(private dialogRef: MatDialogRef<GenerateSponsoredMembersDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: GenerateSponsoredMembersDialogData,
              private store: StoreService,
              private membersService: MembersManagerService,
              private notificator: NotificatorService,
              private translate: TranslateService) { }

  ngOnInit(): void {
    this.theme = this.data.theme;
    this.parseNamespace();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

  createOutputObjects(data: {[p: string]: {[p: string]: string}}) {
    let name = '';
    let status = '';
    let login = '';
    let password = '';
    const output = [];

    for (const memberName of Object.keys(data)) {
      name = memberName;
      for (const memberData of Object.keys(data[memberName])) {
        switch (memberData) {
          case 'status': {
            status = data[memberName][memberData];
            break;
          }
          case 'login': {
            login = data[memberName][memberData];
            break;
          }
          case 'password': {
            password = data[memberName][memberData];
            break;
          }
          default:
            break;
        }
      }
      output.push({
        name: name,
        status: status,
        login: login,
        password: password
      });
    }

    return output;
  }

  exportData(data) {
    this.dataSource.data = this.createOutputObjects(data);
    setTimeout(() => {  this.exporter.exportTable('xlsx', {fileName: 'member-logins'}) }, 2000);
  }

  onGenerate(){
    this.loading = false;
    const memberNames = this.sponsoredMembers.value.split("\n");
    let generatedMemberNames: string[] = [];

    for (const name of memberNames){
      generatedMemberNames = generatedMemberNames.concat(this.parseMemberName(name));
    }


    // For testing purposes
    // const fakeExportData: {[p: string]: {[p: string]: string}} = {
    //   'meno1': {'status': 'ok', 'login': '123', 'password': '456'},
    //   'meno2': {'status': 'ok', 'login': 'abc', 'password': 'wqeq'},
    // }
    // this.exportData(fakeExportData);

    this.membersService.createSponsoredMembers({
      guestNames: generatedMemberNames,
      namespace: this.namespace.value,
      sponsor: this.store.getPerunPrincipal().userId,
      vo: this.data.voId
    }).subscribe(logins => {
      this.exportData(logins);
      this.notificator.showSuccess(this.translate.instant('DIALOGS.GENERATE_SPONSORED_MEMBERS.SUCCESS'));
      this.dialogRef.close(true);
    });
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  parseMemberName(name: string){
    const rangeRegex = new RegExp('\[[0-9]+-[0-9]+\]','g');
    const prefixes = name.split(rangeRegex);
    const suffixes = name.match(rangeRegex);

    if(suffixes == null){
      if (name.trim() === ""){
        return [];
      }
      return [name];
    }

    let nameParts: string[][]= [];

    for(let i = 0; i < prefixes.length - 1; i++) {
      const [from, to] = this.parseRange(suffixes[i]);
      let parts = [];

      for(let j = from; j <= to; j++){
        parts = parts.concat(prefixes[i].concat(j.toString()));
      }
      nameParts = nameParts.concat([parts]);
    }
    nameParts = nameParts.concat([prefixes[prefixes.length - 1]]);

    return this.joinHostNames(nameParts, 0);
  }

  parseRange(range: string){
    const [lower, upper] = range.split("-");

    const from = parseInt(lower.substring(1, lower.length), 10);
    const to = parseInt(upper.substring(0, upper.length), 10);

    return [from, to];
  }

  joinHostNames(nameParts: string[][], position: number){
    if (position === nameParts.length - 1){
      return [nameParts[position]];
    }

    const suffixes = this.joinHostNames(nameParts, position + 1);
    const joinedNames = [];

    for (const name of nameParts[position]){
      for(const suffix of suffixes){
        joinedNames.push(name.concat(suffix));
      }
    }
    return joinedNames;
  }

  pageChanged(event: PageEvent) {
    this.page.emit(event);
  }

}
