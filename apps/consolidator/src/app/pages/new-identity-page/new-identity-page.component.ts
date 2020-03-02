import { Component, OnInit } from '@angular/core';
import { NewTokensServiceService } from '../../services/new-tokens-service.service';
import { Router } from '@angular/router';
import { RegistrarManagerService } from '@perun-web-apps/perun/openapi';

@Component({
  selector: 'perun-web-apps-new-identity-page',
  templateUrl: './new-identity-page.component.html',
  styleUrls: ['./new-identity-page.component.scss']
})
export class NewIdentityPageComponent implements OnInit {

  constructor(
    private newTokensService: NewTokensServiceService,
    private registrarManager: RegistrarManagerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registrarManager.getConsolidatorToken().subscribe(newToken => {
      this.newTokensService.addToken(newToken);
      this.router.navigate(['consolidate']);
    });
  }
}
