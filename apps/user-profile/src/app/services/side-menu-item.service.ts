import { Injectable } from '@angular/core';
import { StoreService } from '@perun-web-apps/perun/services';

@Injectable({
  providedIn: 'root'
})
export class SideMenuItemService {

  constructor(private store: StoreService) { }

  getSideMenuItems(): SideMenuItem[] {
    const items: SideMenuItem[] = [
      {
        label: 'MENU_ITEMS.PROFILE',
        icon: 'account_box',
        link: '/profile',
        activatedRegex: '^/profile$',
        tabName: 'profile'
      },
      {
        label: 'MENU_ITEMS.IDENTITIES',
        icon: 'remove_red_eye',
        link: '/profile/identities',
        activatedRegex: '^/profile/identities$',
        tabName: 'identities'
      },
      {
        label: 'MENU_ITEMS.SERVICES',
        icon: 'build',
        link: '/profile/services',
        activatedRegex: '^/profile/services$',
        tabName: 'services'
      },
      {
        label: 'MENU_ITEMS.GROUPS',
        icon: 'group',
        link: '/profile/groups',
        activatedRegex: '^/profile/groups$',
        tabName: 'groups'
      },
      {
        label: 'MENU_ITEMS.VOS',
        icon: 'account_balance',
        link: '/profile/organizations',
        activatedRegex: '^/profile/organizations$',
        tabName: 'vos'
      },
      {
        label: 'MENU_ITEMS.PRIVACY',
        icon: 'vpn_key',
        link: '/profile/privacy',
        activatedRegex: '^/profile/privacy$',
        tabName: 'privacy'
      },
      {
        label: 'MENU_ITEMS.SETTINGS',
        icon: 'settings',
        link: '/profile/settings',
        activatedRegex: '^/profile/settings',
        tabName: 'settings'
      }
    ];
    const externalServices = this.store.get('external_services');
    externalServices.forEach(service => {
      items.push( {
        label: service['label_en'],
        label_cz: service['label_cz'],
        icon: 'insert_link',
        link: service['url'],
        activatedRegex: '^/profile/external',
        tabName: 'external',
        external: true
      })
    })
    return items;
  }
}

export interface SideMenuItem {
  label: string;
  icon: string;
  link: string;
  activatedRegex: string;
  tabName: string;
  external?: boolean;
  label_cz?: string;
}
