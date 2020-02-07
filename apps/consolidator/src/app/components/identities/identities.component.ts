import { Component, HostBinding, Input } from '@angular/core';
import { getAttribute } from '@perun-web-apps/perun/utils';
import { Urns } from '@perun-web-apps/perun/urns';
import { Identity } from '../../models/Identity';
import { RichUserExtSource } from '@perun-web-apps/perun/models';


@Component({
  selector: 'perun-web-apps-identities',
  templateUrl: './identities.component.html',
  styleUrls: ['./identities.component.scss']
})
export class IdentitiesComponent {

  @HostBinding('class.identities-content') true;

  constructor() { }

  @Input()
  title: string;

  @Input()
  identities: Identity[];

  getEmailText(identity: RichUserExtSource): string {
    const mailAttribute = getAttribute(identity.attributes, Urns.UES_DEF_MAIL);

    return mailAttribute == null ? '-' : <string><unknown>mailAttribute.value;
  }
}
