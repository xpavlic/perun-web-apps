import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableExporterDirective} from 'mat-table-exporter';

@Component({
  selector: 'perun-web-apps-table-options',
  templateUrl: './table-options.component.html',
  styleUrls: ['./table-options.component.scss']
})
export class TableOptionsComponent implements OnInit {

  constructor() { }

  @Input()
  exporter: MatTableExporterDirective;

  @Output()
  exportStart = new EventEmitter();

  @Output()
  exportEnd = new EventEmitter();

  ngOnInit(): void {
    this.exporter.exportStarted.subscribe(() => {this.exportStart.emit();});
    this.exporter.exportCompleted.subscribe(() => this.exportEnd.emit());
  }
}
