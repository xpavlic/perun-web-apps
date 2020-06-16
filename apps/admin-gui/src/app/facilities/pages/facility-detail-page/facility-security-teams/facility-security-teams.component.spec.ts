import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySecurityTeamsComponent } from './facility-security-teams.component';

describe('FacilitySecurityTeamsComponent', () => {
  let component: FacilitySecurityTeamsComponent;
  let fixture: ComponentFixture<FacilitySecurityTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitySecurityTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitySecurityTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
