import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsAppConfigurationComponent } from './user-settings-app-configuration.component';

describe('UserSettingsAppConfigurationComponent', () => {
  let component: UserSettingsAppConfigurationComponent;
  let fixture: ComponentFixture<UserSettingsAppConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsAppConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsAppConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
