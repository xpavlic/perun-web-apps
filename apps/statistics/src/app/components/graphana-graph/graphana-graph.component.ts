import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'perun-web-apps-graphana-graph',
  templateUrl: './graphana-graph.component.html',
  styleUrls: ['./graphana-graph.component.scss']
})
export class GraphanaGraphComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  imgUrl;

  @Input()
  panelId: number;

  ngOnInit() {
    this.httpClient.get(`https://id.muni.cz/simplesaml/grafana.php?panelId=${this.panelId}&width=500&height=400`,
      {responseType: 'blob'}).subscribe(data => {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        this.imgUrl = reader.result;
        console.log(reader.result);
      }
    })
  }
}
