import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSearchSelectComponent } from './vo-search-select.component';

describe('VoSearchSelectComponent', () => {
  let component: VoSearchSelectComponent;
  let fixture: ComponentFixture<VoSearchSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSearchSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSearchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
