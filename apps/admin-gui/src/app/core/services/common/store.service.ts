import { Injectable } from '@angular/core';

/**
 * Class that just store data about instance and default configuration.
 * No logic involved.
 */
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private instanceConfig;
  private defaultConfig;

  constructor() { }

  setInstanceConfig(instanceConfig: any) {
    this.instanceConfig = instanceConfig;
  }

  setDefaultConfig(defaultConfig: any) {
    this.defaultConfig = defaultConfig;
  }

  /**
   * Get key from json configuration. If key is not present in instance
   * configuration method returns value from default configuration.
   * @param keys
   */
  get(...keys: string[]) : any {
    let currentValue: string;

    if (this.instanceConfig !== undefined) {
      for (let i = 0; i < keys.length; ++i) {
        if (i === 0) {
          currentValue = this.instanceConfig[keys[i]];
        } else {
          if (currentValue === undefined) {
            break;
          }
          currentValue = currentValue[keys[i]];
        }
      }
    }

    if (currentValue === undefined) {
      for (let i = 0; i < keys.length; ++i) {
        if (i === 0) {
          currentValue = this.defaultConfig[keys[i]];
        } else {
          if (currentValue === undefined) {
            console.error('Missing value in default config: ' + keys);
            break;
          }
          currentValue = currentValue[keys[i]];
        }
      }
    }

    return currentValue;
  }
}
