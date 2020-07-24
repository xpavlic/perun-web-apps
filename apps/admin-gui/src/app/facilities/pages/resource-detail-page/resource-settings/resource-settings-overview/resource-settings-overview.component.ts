import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '@perun-web-apps/perun/models';
import { Resource, ResourcesManagerService } from '@perun-web-apps/perun/openapi';

@Component({
  selector: 'app-resource-settings-overview',
  templateUrl: './resource-settings-overview.component.html',
  styleUrls: ['./resource-settings-overview.component.scss']
})
export class ResourceSettingsOverviewComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private route: ActivatedRoute,
    private resourceManager: ResourcesManagerService
  ) { }

  items: MenuItem[] = [];
  resource: Resource;

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParams => {
      const resourceId = parentParams['resourceId'];

      this.resourceManager.getResourceById(resourceId).subscribe(resource => {
        this.resource = resource;

        if (this.route.parent.parent.parent.snapshot.url[0].path === 'facilities') {
          this.initItems(false);
        } else {
          this.initItems(true);
        }
      });
    });
  }

  private initItems(inVo: boolean) {
    this.items = [
      {
        cssIcon: 'perun-attributes',
        url: `${inVo ? `/organizations/${this.resource.voId}` : `/facilities/${this.resource.facilityId}`}/resources/${this.resource.id}/settings/attributes`,
        label: 'MENU_ITEMS.RESOURCE.ATTRIBUTES',
        style: 'resource-btn'
      },
      {
        cssIcon: 'perun-manager',
        url: `${inVo ? `/organizations/${this.resource.voId}` : `/facilities/${this.resource.facilityId}`}/resources/${this.resource.id}/settings/managers`,
        label: 'MENU_ITEMS.RESOURCE.MANAGERS',
        style: 'resource-btn'
      }
    ];
  }
}
