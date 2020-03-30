import { Component, OnInit } from '@angular/core';
import { StoreService } from '@perun-web-apps/perun/services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'perun-web-apps-jednotne-prihlaseni-loginy',
  templateUrl: './jednotne-prihlaseni-loginy.component.html',
  styleUrls: ['./jednotne-prihlaseni-loginy.component.scss']
})
export class JednotnePrihlaseniLoginyComponent implements OnInit {

  constructor(
    private store: StoreService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    const url = this.store.get('proxy_stat_url');

    this.httpClient.get(url).subscribe(data => {
      console.log(data);
    })
  }

}
