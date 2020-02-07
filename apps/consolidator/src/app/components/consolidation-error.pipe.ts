import { Pipe, PipeTransform } from '@angular/core';
import { RPCError } from '@perun-web-apps/perun/models';

@Pipe({
  name: 'consolidationError'
})
export class ConsolidationErrorPipe implements PipeTransform {

  constructor(
  ) {

  }

  translations = {
    "IdentitiesAlreadyJoinedException" : "CONSOLIDATE.ALREADY_JOINED_ERROR"
  };

  transform(value: any, ...args: any[]): any {
    if (value === null || value === undefined) {
      return value;
    }

    const error = <RPCError>value;
    console.log(error);
    if (!error.name) {
      return error.message;
    }
    const translationValue = this.translations[error.name];
    console.log(translationValue);
    if (!translationValue) {
      return error.message;
    }
    return translationValue;
  }

}
