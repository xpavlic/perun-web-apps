import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../../../core/services/common/side-menu.service';
import { VoService } from '@perun-web-apps/perun/services';
import { Vo } from '@perun-web-apps/perun/models';
import { getRecentlyVisited, getRecentlyVisitedIds } from '@perun-web-apps/perun/utils';
import { MatDialog } from '@angular/material';
import { CreateVoDialogComponent } from '../../../shared/components/dialogs/create-vo-dialog/create-vo-dialog.component';
import { AuthResolverService } from '../../../core/services/common/auth-resolver.service';

@Component({
  selector: 'app-vo-select-page',
  templateUrl: './vo-select-page.component.html',
  styleUrls: ['./vo-select-page.component.scss']
})
export class VoSelectPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private authzService: AuthResolverService,
    private dialog: MatDialog
  ) { }

  vos: Vo[] = [];
  recentIds = [];
  loading: boolean;
  filterValue = '';

  isAllowed: boolean;

  ngOnInit() {
    this.loading = true;
    this.isAllowed = this.authzService.isVoAdmin();
    this.sideMenuService.setAccessMenuItems([]);
    this.refreshTable();
  }

  refreshTable() {
    this.loading = true;
    this.voService.getVos().subscribe(vos => {
      this.vos = getRecentlyVisited('vos', vos);
      this.recentIds = getRecentlyVisitedIds('vos');
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  onCreateVo() {
    const dialogRef = this.dialog.open(CreateVoDialogComponent, {
      width: '600px',
      data: { theme: 'vo-theme'}
    });

    dialogRef.afterClosed().subscribe( isVoCreated => {
      if (isVoCreated){
        this.refreshTable();
      }
    });
  }
}
