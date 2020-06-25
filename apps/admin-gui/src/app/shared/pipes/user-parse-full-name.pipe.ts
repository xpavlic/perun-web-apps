import { Pipe, PipeTransform } from '@angular/core';
import { parseFullName } from '@perun-web-apps/perun/utils';

@Pipe({
  name: 'userParseFullName'
})
export class UserParseFullNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return parseFullName(value);
  }

}
