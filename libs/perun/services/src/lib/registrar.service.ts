import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PERUN_API_SERVICE } from '@perun-web-apps/perun/tokens';
import { PerunApiService } from './perun-api-service';
import { ApplicationMail } from '@perun-web-apps/perun/models';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(
    @Inject(PERUN_API_SERVICE) private apiService: PerunApiService
  ) {
  }

  getApplicationMailsForVo(vo: number, showNotificationOnError = true): Observable<ApplicationMail[]> {
    return this.apiService.post('json/registrarManager/getApplicationMails', {
      'vo': vo
    }, showNotificationOnError);
  }

  getApplicationMailsForGroup(group: number, showNotificationOnError = true): Observable<ApplicationMail[]> {
    return this.apiService.post('json/registrarManager/getApplicationMails', {
      'group': group
    }, showNotificationOnError);
  }

  setSendingEnabled(enabled: number, applicationMails: ApplicationMail[], showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/setSendingEnabled', {
      'enabled': enabled,
      'mails': applicationMails
    }, showNotificationOnError);
  }

  copyMailsFromGroupToVo(fromGroup: number, toVo: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyMails', {
      'fromGroup': fromGroup,
      'toVo': toVo
    }, showNotificationOnError);
  }

  copyMailsFromVoToVo(fromVo: number, toVo: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyMails', {
      'fromVo': fromVo,
      'toVo': toVo
    }, showNotificationOnError);
  }

  deleteApplicationMailForVo(vo: number, id: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/deleteApplicationMail', {
      'vo': vo,
      'id': id
    }, showNotificationOnError);
  }

  deleteApplicationMailForGroup(group: number, id: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/deleteApplicationMail', {
      'group': group,
      'id': id
    }, showNotificationOnError);
  }

  updateApplicationMail(mail: ApplicationMail, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/updateApplicationMail', {
      'mail': mail
    }, showNotificationOnError);
  }

  addApplicationMailForVo(vo: number, mail: ApplicationMail, showNotificationOnError = true): Observable<ApplicationMail> {
    return this.apiService.post('json/registrarManager/addApplicationMail', {
      'vo': vo,
      'mail': mail
    }, showNotificationOnError);
  }

  addApplicationMailForGroup(group: number, mail: ApplicationMail, showNotificationOnError = true): Observable<ApplicationMail> {
    return this.apiService.post('json/registrarManager/addApplicationMail', {
      'group': group,
      'mail': mail
    }, showNotificationOnError);
  }

  copyMailsFromGroupToGroup(fromGroup: number, toGroup: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyMails', {
      'fromGroup': fromGroup,
      'toGroup': toGroup
    }, showNotificationOnError);
  }

  copyMailsFromVoToGroup(fromVo: number, toGroup: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyMails', {
      'fromVo': fromVo,
      'toGroup': toGroup
    }, showNotificationOnError);
  }
}
