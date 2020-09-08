import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsServiceIdentitiesComponent } from './user-settings-service-identities.component';

describe('UserSettingsServiceIdentitiesComponent', () => {
  let component: UserSettingsServiceIdentitiesComponent;
  let fixture: ComponentFixture<UserSettingsServiceIdentitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsServiceIdentitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsServiceIdentitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
