import { Component, OnInit } from '@angular/core';
import { fadeIn } from '@perun-web-apps/perun/animations';
import { Service, ServicesManagerService } from '@perun-web-apps/perun/openapi';
import { ActivatedRoute } from '@angular/router';
import { SideMenuService } from '../../../../../core/services/common/side-menu.service';
import { SideMenuItemService } from '../../../../../shared/side-menu/side-menu-item.service';
import { getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditServiceDialogComponent } from '../../../../../shared/components/dialogs/create-edit-service-dialog/create-edit-service-dialog.component';

@Component({
  selector: 'app-service-detail-page',
  templateUrl: './service-detail-page.component.html',
  styleUrls: ['./service-detail-page.component.scss'],
  animations: [
    fadeIn
  ]
})
export class ServiceDetailPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private serviceManager: ServicesManagerService,
    private sideMenuService: SideMenuService,
    private sideMenuItemService: SideMenuItemService,
    private dialog: MatDialog) {
  }

  service: Service;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const serviceId = params["serviceId"];

      this.serviceManager.getServiceById(serviceId).subscribe(service => {
        this.service = service;

        const serviceItems = this.sideMenuItemService.parseService(this.service);
        this.sideMenuService.setAdminItems([serviceItems]);
      });
    });
  }

  editService() {
    const config = getDefaultDialogConfig();
    config.width = '600px';
    config.data = {
      theme: 'service-theme',
      service: this.service
    };

    const dialogRef = this.dialog.open(CreateEditServiceDialogComponent, config);

    dialogRef.afterClosed().subscribe( result => {
      if (result){
        this.ngOnInit();
      }
    });
  }

}
