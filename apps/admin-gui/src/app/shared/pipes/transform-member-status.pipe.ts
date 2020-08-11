import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformMemberStatus'
})
export class TransformMemberStatusPipe implements PipeTransform {

  transform(memberStatus: string, memberGroupStatus?:string): string {
    if(memberStatus.toLowerCase() === 'valid' && (!memberGroupStatus || memberStatus.toLowerCase() === 'valid')){
      return 'ACTIVE'
    }
    if(memberStatus.toLowerCase() === 'invalid'  ||  (memberGroupStatus && memberStatus.toLowerCase() === 'invalid')){
      return 'INACTIVE'
    }
    return memberStatus;
  }

}
