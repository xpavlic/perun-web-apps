import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySettingsBlacklistComponent } from './facility-settings-blacklist.component';

describe('FacilitySettingsBlacklistComponent', () => {
  let component: FacilitySettingsBlacklistComponent;
  let fixture: ComponentFixture<FacilitySettingsBlacklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitySettingsBlacklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitySettingsBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
