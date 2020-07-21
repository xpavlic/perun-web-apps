import { Component, OnInit } from '@angular/core';
import { Resource, ResourcesManagerService } from '@perun-web-apps/perun/openapi';
import { Role } from '@perun-web-apps/perun/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource-settings-managers',
  templateUrl: './resource-settings-managers.component.html',
  styleUrls: ['./resource-settings-managers.component.scss']
})
export class ResourceSettingsManagersComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourcesManagerService) { }

  resource: Resource;
  availableRoles: Role[] = [ Role.RESOURCEADMIN ];
  type = "Resource";
  theme = 'resource-theme';



  ngOnInit(): void {
    this.route.parent.parent.params.subscribe(params => {
      const resourceId = params["resourceId"];

      this.resourceService.getResourceById(resourceId).subscribe(resource => {
        this.resource = resource;
      });
    });
  }

}
