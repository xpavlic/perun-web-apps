import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { PERUN_API_SERVICE } from '@perun-web-apps/perun/tokens';
import { PerunApiService } from './perun-api-service';
import { AttributeDefinition, AttributeRights, AttrEntity, Graph } from '@perun-web-apps/perun/models';


@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(
    @Inject(PERUN_API_SERVICE) private apiService: PerunApiService
  ) {
  }

  getAttributeModulesDependenciesGraphText(format: string, showNotificationOnError = true): Observable<Graph> {
    return this.apiService.get(`json/attributesManager/getAttributeModulesDependenciesGraphText?format=${format}`,
      new HttpParams(), showNotificationOnError);
  }

  deleteAttributes(entityId: number, entity: AttrEntity, attributeIDs: number[], showNotificationOnError = true) {
    const payload = {};
    payload[entity] = entityId;
    payload['attributes'] = attributeIDs;

    return this.apiService.post('json/attributesManager/removeAttributes', payload, showNotificationOnError);
  }

  getAttributeDefinitionsWithRights(voId: number, entity: string, showNotificationOnError = true): Observable<AttributeDefinition[]> {
    return this.apiService.get(`json/attributesManager/getAttributesDefinitionWithRights?${entity}=${voId}`,
      new HttpParams(), showNotificationOnError);
  }

  setAttributesRights(rights: AttributeRights[], showNotificationOnError = true) {
    const payload = {};
    payload['rights'] = rights;

    return this.apiService.post('json/attributesManager/setAttributeRights', payload, showNotificationOnError);
  }

  getAttributeRights(attId: number, showNotificationOnError = true): Observable<AttributeRights[]> {
    return this.apiService.get(`json/attributesManager/getAttributeRights?attributeId=${attId}`, new HttpParams(), showNotificationOnError);
  }

  updateAttributeDefinition(attDef: AttributeDefinition, showNotificationOnError = true): Observable<AttributeDefinition> {
    const payload = {};
    payload['attributeDefinition'] = attDef;

    return this.apiService.post('json/attributesManager/updateAttributeDefinition', payload, showNotificationOnError);
  }

  getEntitylessKeys(attDefId: number, showNotificationOnError = true): Observable<string[]> {
    return this.apiService.get(`json/attributesManager/getEntitylessKeys?attributeDefinition=${attDefId}`,
      new HttpParams(), showNotificationOnError);
  }

  removeEntitylessAttribute(key: string, attId: number, showNotificationOnError = true): Observable<void> {
    const payload = {};
    payload['key'] = key;
    payload['attribute'] = attId;

    return this.apiService.post('json/attributesManager/removeAttribute', payload, showNotificationOnError)
  }
}

