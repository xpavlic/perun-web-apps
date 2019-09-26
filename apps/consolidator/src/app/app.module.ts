import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from '@perun-web-apps/ui';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiMaterialModule } from '@perun-web-apps/ui/material';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IdentitiesComponent } from './components/identities/identities.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AddIdentityDialogComponent } from './components/add-identity-dialog/add-identity-dialog.component';
import { PERUN_API_SERVICE } from '@perun-web-apps/perun/tokens';
import { ApiService } from './services/api.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, HomePageComponent, IdentitiesComponent, AddIdentityDialogComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    UiModule,
    UiMaterialModule
  ],
  providers: [
    {
      provide: PERUN_API_SERVICE,
      useClass: ApiService
    }
  ],
  entryComponents: [
    AddIdentityDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
