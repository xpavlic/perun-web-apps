import {NgModule} from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';
import {AuthCallbackComponent} from './core/components/auth-callback/auth-callback.component';
import { UserDashboardComponent } from './users/pages/user-detail-page/user-dashboard/user-dashboard.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { RedirectPageComponent } from '@perun-web-apps/perun/components';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'redirect',
    component: RedirectPageComponent
  },
  {
    path: 'api-callback',
    component: AuthCallbackComponent,
  },
  {
    path: 'organizations',
    loadChildren: () => import('./vos/vos.module').then(m => m.VosModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'facilities',
    loadChildren: () => import('./facilities/facilities.module').then(m => m.FacilitiesModule),
  },
  {
    path: 'myProfile',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'home',
    component: UserDashboardComponent
  },
  { path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
