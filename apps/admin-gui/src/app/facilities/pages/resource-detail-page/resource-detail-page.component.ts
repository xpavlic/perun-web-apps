import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeIn } from '@perun-web-apps/perun/animations';
import { SideMenuService } from '../../../core/services/common/side-menu.service';
import { SideMenuItemService } from '../../../shared/side-menu/side-menu-item.service';
import {
  FacilitiesManagerService,
  ResourcesManagerService,
  RichResource,
  VosManagerService
} from '@perun-web-apps/perun/openapi';

@Component({
  selector: 'app-resource-detail-page',
  templateUrl: './resource-detail-page.component.html',
  styleUrls: ['./resource-detail-page.component.scss'],
  animations: [
    fadeIn
  ]
})
export class ResourceDetailPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private facilityManager: FacilitiesManagerService,
    private vosManagerService: VosManagerService,
    private resourcesManager: ResourcesManagerService,
    private sideMenuService: SideMenuService,
    private sideMenuItemService: SideMenuItemService
  ) { }

  resource: RichResource;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const resourceId = params['resourceId'];

      this.resourcesManager.getRichResourceById(resourceId).subscribe(resource => {
        this.resource = resource;

        if (this.route.parent.snapshot.url[0].path === 'facilities') {
          this.facilityManager.getFacilityById(resource.facilityId).subscribe(facility => {
            const facilityItem = this.sideMenuItemService.parseFacility(facility);
            const resourceItem = this.sideMenuItemService.parseResource(resource, false);
            this.sideMenuService.setFacilityMenuItems([facilityItem, resourceItem]);
          });
        } else {
          this.vosManagerService.getVoById(resource.voId).subscribe(vo => {
            const voItem = this.sideMenuItemService.parseVo(vo);
            const resourceItem = this.sideMenuItemService.parseResource(resource, true);

            this.sideMenuService.setAccessMenuItems([voItem, resourceItem]);
          });
        }
      });
    });
  }
}
