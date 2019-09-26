import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PerunApiService {
  getHeaders(): HttpHeaders;

  get(path: string, params: HttpParams, showError: boolean): Observable<any>;

  put(path: string, body, showError: boolean): Observable<any>;

  post(path: string, body, showError: boolean): Observable<any>;

  delete(path, showError: boolean): Observable<any>;
}
