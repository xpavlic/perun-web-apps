import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RichDestination } from '@perun-web-apps/perun/models';
import { PERUN_API_SERVICE } from '@perun-web-apps/perun/tokens';
import { PerunApiService } from './perun-api-service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    @Inject(PERUN_API_SERVICE) private apiService: PerunApiService
  ) { }

  getAllRichDestinations(facilityId: number, showNotificationOnError = true): Observable<RichDestination[]> {
    return this.apiService.post('json/servicesManager/getAllRichDestinations', {
      'facility': facilityId
    }, showNotificationOnError);
  }
}
