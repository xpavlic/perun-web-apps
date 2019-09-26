import { Inject, Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { PERUN_API_SERVICE } from '@perun-web-apps/perun/tokens';
import { PerunApiService } from './perun-api-service';
import { ResourceState } from '@perun-web-apps/perun/models';

@Injectable({
  providedIn: 'root'
})
export class PropagationStatsReaderService {

  constructor(
    @Inject(PERUN_API_SERVICE) private apiService: PerunApiService
  ) {}

  getAllResourcesState(voId: number, showNotificationOnError = true): Observable<ResourceState[]> {
    return this.apiService.post('json/propagationStatsReader/getAllResourcesState',
      {
        'voId': voId
      }, showNotificationOnError);
  }
}
