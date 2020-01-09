import { Injectable } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

export class CustomIcon  {
  url: string;
  name: string;
}

@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  customIcons: CustomIcon[] = [
    {
      url: 'assets/img/PerunWebImages/refresh_tab-black.svg',
      name: 'perun-refresh-enabled'
    },
    {
      url: 'assets/img/PerunWebImages/refresh_tab-grey.svg',
      name: 'perun-refresh-disabled'
    },
    {
      url: 'assets/img/PerunWebImages/manage_facility_white.svg',
      name: 'perun-manage-facility'
    },
    {
      url: 'assets/img/PerunWebImages/vo-white.svg',
      name: 'perun-vo'
    },
    {
      url: 'assets/img/PerunWebImages/user-white.svg',
      name: 'perun-user'
    },
    {
      url: 'assets/img/PerunWebImages/perun_admin-white.svg',
      name: 'perun-perun-admin'
    },
    {
      url: 'assets/img/PerunWebImages/group-white.svg',
      name: 'perun-group'
    },
  ];

  registerPerunRefreshIcon() {
    this.customIcons.forEach(ci => {
      this.matIconRegistry.addSvgIcon(
        ci.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(ci.url)
      )
    });
  }
}
