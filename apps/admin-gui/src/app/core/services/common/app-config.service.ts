import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private instanceConfig;
  private defaultConfig;

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  /**
   * Load default configuration.
   * If instance is not in production mode configuration it is also
   * taken as instance configuration and start authentication.
   */
  loadAppDefaultConfig() : Promise<void> {
    return this.http.get('/assets/config/defaultConfig.json', {headers: this.getNoCacheHeaders()})
      .toPromise()
      .then(config => {
        this.defaultConfig = config;
        if (!environment.production) {
          this.instanceConfig = config;
          this.authService.loadConfigData(this.instanceConfig);
        }
      });
  }

  /**
   * Load instance configuration.
   * If instance is in production mode configuration mode is assigned to
   * instance config and start authentication.
   */
  loadAppInstanceConfig() : Promise<void>  {
    return this.http.get('/assets/config/instanceConfig.json', {headers: this.getNoCacheHeaders()})
      .toPromise()
      .then(data => {
        if (environment.production) {
          this.instanceConfig = data;
          this.authService.loadConfigData(this.instanceConfig);
        }
      }, () => {
        if (environment.production) {
          console.error('Failed to load instance config.')
        } else {
          console.log('instance config not detected')
        }
      });
  }

  getNoCacheHeaders() : HttpHeaders {
    return new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
  }

  /**
   * Get key from json configuration. If key is not present in instance
   * configuration method returns value from default configuration.
   * @param key
   */
  get(key: any) {
    const value = this.instanceConfig[key];
    if (value) {
      return value;
    } else {
      return this.defaultConfig[key];
    }
  }
}
