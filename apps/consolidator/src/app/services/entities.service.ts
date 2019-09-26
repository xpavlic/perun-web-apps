import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Entity } from '../models/Entity';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  constructor(
    private http: HttpClient
  ) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.entitiesUrl}${path}`, )
      .pipe(catchError(err => this.formatErrors(err)));
  }

  loadEntities(): Observable<Entity[]> {
    return this.get('');
  }
}
