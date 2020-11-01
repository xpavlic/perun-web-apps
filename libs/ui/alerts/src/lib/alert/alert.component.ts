import { Component, Input, OnInit } from '@angular/core';

export type Color = 'error' | 'warn' | "info";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  @Input()
  color: Color;

  ngOnInit() {
  }

}
