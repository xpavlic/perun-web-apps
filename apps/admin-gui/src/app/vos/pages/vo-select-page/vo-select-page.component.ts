import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../../core/services/common/side-menu.service';
import {getRecentlyVisitedIds, getRecentlyVisited} from '../../../shared/utils';
import { VoService } from '@perun-web-apps/perun/services';
import { Vo } from '@perun-web-apps/perun/models';

@Component({
  selector: 'app-vo-select-page',
  templateUrl: './vo-select-page.component.html',
  styleUrls: ['./vo-select-page.component.scss']
})
export class VoSelectPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService
  ) { }

  vos: Vo[] = [];
  recentIds = [];
  loading: boolean;
  filterValue = '';

  ngOnInit() {
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
}
