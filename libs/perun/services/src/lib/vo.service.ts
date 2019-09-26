import { Inject, Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import { PERUN_API_SERVICE } from '@perun-web-apps/perun/tokens';
import { PerunApiService } from './perun-api-service';
import { MemberCandidate, Vo } from '@perun-web-apps/perun/models';

@Injectable({
  providedIn: 'root'
})
export class VoService {

  constructor(
    @Inject(PERUN_API_SERVICE) private apiService: PerunApiService
  ) { }

  getAllVos(showNotificationOnError = true): Observable<Vo[]> {
    return this.apiService.get('json/vosManager/getAllVos', new HttpParams(), showNotificationOnError);
  }

  getVos(showNotificationOnError = true): Observable<Vo[]> {
    return this.apiService.get('json/vosManager/getVos', new HttpParams(), showNotificationOnError);
  }

  getVoById(id: number, showNotificationOnError = true): Observable<Vo> {
    return this.apiService.get(`json/vosManager/getVoById?id=${id}`, new HttpParams(), showNotificationOnError);
  }

  getCompleteCandidates(voId: number, attrNames: string[], searchString: string,
                        showNotificationOnError = true): Observable<MemberCandidate[]> {
    return this.apiService.post('json/vosManager/getCompleteCandidates', {
      vo: voId,
      attrNames: attrNames,
      searchString: searchString
    }, showNotificationOnError);
  }
}
