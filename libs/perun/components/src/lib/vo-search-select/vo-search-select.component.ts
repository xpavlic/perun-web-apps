import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { Vo } from '@perun-web-apps/perun/openapi';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'perun-web-apps-vo-search-select',
  templateUrl: './vo-search-select.component.html',
  styleUrls: ['./vo-search-select.component.css']
})
export class VoSearchSelectComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }

  @Input()
  vos: Vo[];

  @Output()
  voSelected = new EventEmitter<Vo>();

  voCtrl: FormControl = new FormControl();
  voFilterCtrl: FormControl = new FormControl();
  filteredVos = new ReplaySubject<Vo[]>(1);

  protected _onDestroy = new Subject<void>();

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredVos.next(this.vos.slice());

    this.voCtrl.valueChanges.subscribe(vo => this.voSelected.emit(vo));

    this.voFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterVos();
      });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  private filterVos() {
    if (!this.vos) {
      return;
    }
    // get the search keyword
    let search = this.voFilterCtrl.value;
    if (!search) {
      this.filteredVos.next(this.vos.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredVos.next(
      this.vos.filter(option => option.name.toLowerCase().indexOf(search) >=0
        || option.shortName.toLowerCase().indexOf(search) >= 0)
    );
  }
}
