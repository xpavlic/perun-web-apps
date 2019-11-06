import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { MainMenuPageComponent } from './main-menu-page/main-menu-page.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {RouteReuseStrategy} from '@angular/router';
import {CacheRouteReuseStrategy} from './core/services/common/cache-route-reuse-strategy';
import {MatIconModule} from '@angular/material';
import {CustomIconService} from './core/services/api/custom-icon.service';
import { PERUN_API_SERVICE } from '@perun-web-apps/perun/tokens';
import { ApiService } from './core/services/api/api.service';
import { AppConfigService } from './core/services/common/app-config.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const loadAppDefaultConfig = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppDefaultConfig();
  };
};

const loadAppInstanceConfig = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppInstanceConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    MainMenuPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    MatIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadAppDefaultConfig,
      multi: true,
      deps: [AppConfigService]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadAppInstanceConfig,
      multi: true,
      deps: [AppConfigService]
    },
    {
    provide: RouteReuseStrategy,
    useClass: CacheRouteReuseStrategy
    },
    CustomIconService,
    {
      provide: PERUN_API_SERVICE,
      useClass: ApiService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private customIconService: CustomIconService
  ) {
    this.customIconService.registerPerunRefreshIcon();
  }
}
