import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthResolverService} from './core/services/common/auth-resolver.service';
import {AuthService} from './core/services/common/auth.service';
import {CacheHelperService} from './core/services/common/cache-helper.service';
import { AuthzService } from '@perun-web-apps/perun/services';
import { PerunPrincipal } from '@perun-web-apps/perun/models';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    translate: TranslateService,
    private authzService: AuthzService,
    private authResolver: AuthResolverService,
    private authService: AuthService,
    private cache: CacheHelperService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.cache.init();
    this.getScreenSize(null);
  }

  public static minWidth = 768;

  sidebarMode: 'over' | 'push' | 'side' = 'side';
  lastScreenWidth: number;
  loading = true;

  principal: PerunPrincipal;
  isProduction = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {

    if (window.innerWidth > AppComponent.minWidth) {
      this.sidebarMode = 'side';
    }

    if (window.innerWidth <= AppComponent.minWidth) {
      this.sidebarMode = 'over';
    }

    this.lastScreenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.isProduction = environment.production;
    this.authService.getUserManager().getUser().then(user => {
      if (user) {
        this.loadPrincipal();
        this.loading = false;
      } else {
        this.authService.userSet.subscribe(() => {
          this.loadPrincipal();
          this.loading = false;
        });
      }
    });
  }

  private loadPrincipal(): void {
    this.authzService.getPerunPrincipal().subscribe(perunPrincipal => {
      this.authResolver.setPerunPrincipal(perunPrincipal);
      this.principal = perunPrincipal;
    });
  }

  getTopGap() {
    return environment.production ? 112 : 64;
  }

  getSideNavMarginTop() {
    return environment.production ? '112px' : '64px';
  }

  getSideNavMinHeight() {
    return environment.production ? 'calc(100vh - 112px)' : 'calc(100vh - 64px)';
  }

  getContentInnerHeight() {
    return environment.production ? 'calc(100vh - 112px)' : 'calc(100vh - 64px)';
  }

  getNavMenuTop() {
    return environment.production ? '48px' : '0';
  }
}
