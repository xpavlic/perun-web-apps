import { Component, OnInit } from '@angular/core';
import { StoreService } from '@perun-web-apps/perun/services';

@Component({
  selector: 'perun-web-apps-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private store: StoreService
  ) { }

  graphanaIds: number[];

  ngOnInit() {
    this.graphanaIds = this.store.get('graphana_ids');
    console.log(this.graphanaIds);
  }
}
