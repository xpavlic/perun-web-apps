import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '@perun-web-apps/perun/services';
import { NewTokensServiceService } from '../../services/new-tokens-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'perun-web-apps-new-identity-page',
  templateUrl: './new-identity-page.component.html',
  styleUrls: ['./new-identity-page.component.scss']
})
export class NewIdentityPageComponent implements OnInit {

  constructor(
    private newTokensService: NewTokensServiceService,
    private registrar: RegistrarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registrar.getConsolidatorToken().subscribe(newToken => {
      this.newTokensService.addToken(newToken);
      this.router.navigate(['consolidate']);
    });
  }
}
