import { Pipe, PipeTransform } from '@angular/core';
import { Attribute } from '@perun-web-apps/perun/openapi';

@Pipe({
  name: 'getMemberExpiration'
})
export class GetMemberExpirationPipe implements PipeTransform {

  transform(attributes: Attribute[]): string {
    const memberExpiration = attributes.find(att => att.friendlyName === 'membershipExpiration');
    const groupExpiration = attributes.find(att => att.friendlyName === 'groupMembershipExpiration');
    if(groupExpiration){
      return groupExpiration.value ? groupExpiration.value as unknown as string : 'never';
    }
    if(memberExpiration){
      return memberExpiration.value ? memberExpiration.value as unknown as string : 'never';
    }
  }
}
