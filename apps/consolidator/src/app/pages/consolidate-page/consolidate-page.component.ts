import { Component, OnInit } from '@angular/core';
import { NewTokensServiceService } from '../../services/new-tokens-service.service';
import { RegistrarService } from '@perun-web-apps/perun/services';
import { Router } from '@angular/router';

@Component({
  selector: 'perun-web-apps-consolidate-page',
  templateUrl: './consolidate-page.component.html',
  styleUrls: ['./consolidate-page.component.scss']
})
export class ConsolidatePageComponent implements OnInit {

  constructor(
    private newTokens: NewTokensServiceService,
    private registrar: RegistrarService,
    private router: Router
  ) { }

  ngOnInit() {
    const token = this.newTokens.getTokens()[0];
    console.log(token);

    this.registrar.consolidate(token).subscribe(ueses => {
      console.log(ueses);
      this.router.navigate(['identities']);
    })
  }

}
