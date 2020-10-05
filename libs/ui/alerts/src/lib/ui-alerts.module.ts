import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { AlertComponent } from './alert/alert.component';
import { InfoComponent } from './info/info.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    ErrorComponent,
    AlertComponent,
    InfoComponent
  ],
  imports: [
    MatIconModule
  ],
  declarations: [
    ErrorComponent,
    AlertComponent,
    InfoComponent
  ]
})
export class UiAlertsModule {
}
