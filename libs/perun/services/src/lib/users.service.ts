import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { PERUN_API_SERVICE } from '@perun-web-apps/perun/tokens';
import { PerunApiService } from './perun-api-service';
import { RichUser, User, UserExtSource } from '@perun-web-apps/perun/models';
import { parseUrnsToUrlParam } from '@perun-web-apps/perun/utils';
import { RichUserExtSource } from '../../../models/src/lib/RichUserExtSource';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject(PERUN_API_SERVICE) private apiService: PerunApiService
  ) { }

  findRichUsersWithAttributes(
    searchString: string,
    attributes: string[],
    showNotificationOnError = true): Observable<RichUser[]>
  {
    const attrParam = parseUrnsToUrlParam('attrsNames', attributes);
    return this.apiService.get(
      `json/usersManager/findRichUsersWithAttributes?searchString=${searchString}${attrParam}`,
      new HttpParams(),
      showNotificationOnError
    );
  }

  getUserById(userId: number, showNotificationOnError = true): Observable<User> {
    return this.apiService.get(
      `json/usersManager/getUserById?id=${userId}`,
      new HttpParams(),
      showNotificationOnError
    );
  }

  findUsers(searchString: string, showNotificationOnError = true): Observable<User[]> {
    return this.apiService.post('json/usersManager/findUsers', {
      'searchString': searchString
    }, showNotificationOnError);
  }

  findRichUsers(searchString: string, showNotificationOnError = true): Observable<RichUser[]> {
    return this.apiService.post('json/usersManager/findRichUsers', {
      searchString: searchString
    }, showNotificationOnError);
  }

  getUserExtSources(userId: number, showNotificationOnError = true): Observable<UserExtSource[]> {
    return this.apiService.post('json/usersManager/getUserExtSources', {
      user: userId
    }, showNotificationOnError);
  }

  getRichUserExtSources(userId: number, attrsNames: string[], showNotificationOnError = true):
    Observable<RichUserExtSource[]>
  {
    return this.apiService.post('json/usersManager/getRichUserExtSources', {
      user: userId,
      attrsNames: attrsNames
    }, showNotificationOnError);
  }

  getRichUserExtSourcesWithAllAttributes(userId: number, showNotificationOnError = true):
    Observable<RichUserExtSource[]>
  {
    return this.apiService.post('json/usersManager/getRichUserExtSources', {
      user: userId
    }, showNotificationOnError);
  }
}
