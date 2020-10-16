import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[perunWebAppsMiddleClickRouterLink]'
})
export class MiddleClickRouterLinkDirective{

  constructor(){ }

  @Input()
  perunWebAppsMiddleClickRouterLink: any[];

  @HostListener('mouseup', ['$event']) onClick(event: MouseEvent) {
    if (event.button === 1 && (this.perunWebAppsMiddleClickRouterLink !== null && this.perunWebAppsMiddleClickRouterLink !== undefined)){
      let fullUrl = '';
      this.perunWebAppsMiddleClickRouterLink.forEach(c => fullUrl += '/' + c);
      if (fullUrl.length > 0) {
        fullUrl = fullUrl.substring(1);
      }
      window.open(fullUrl);
    }
  }

}
