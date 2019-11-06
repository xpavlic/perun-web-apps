import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../core/services/common/app-config.service';

@Component({
  selector: 'app-perun-footer',
  templateUrl: './perun-footer.component.html',
  styleUrls: ['./perun-footer.component.scss']
})
export class PerunFooterComponent implements OnInit {

  constructor(private appConfigService: AppConfigService) { }

  perunwebpage = '';
  perunTeamWebpage = '';
  privacyPolicy = '';
  userDocumentationWebpage = '';
  administratorDocumentationWebpage = '';
  supportMail = '';
  version = '';
  copyright: [] = [];

  currentYear = (new Date()).getFullYear();

  ngOnInit() {
    this.perunwebpage = this.appConfigService.get('footer_perun_web_web');
    this.perunTeamWebpage = this.appConfigService.get('footer_perun_team_web');
    this.privacyPolicy = this.appConfigService.get('footer_privacy_policy_web');
    this.userDocumentationWebpage = this.appConfigService.get('footer_users_documentation_web');
    this.administratorDocumentationWebpage = this.appConfigService.get('footer_administrator_documentation');
    this.supportMail = this.appConfigService.get('footer_support_mail');
    this.version = this.appConfigService.get('version');
    this.copyright = this.appConfigService.get('footer_copyright');
  }

}
