import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityHostsDetailComponent } from './facility-hosts-detail.component';

describe('FacilityHostsDetailComponent', () => {
  let component: FacilityHostsDetailComponent;
  let fixture: ComponentFixture<FacilityHostsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityHostsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityHostsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
