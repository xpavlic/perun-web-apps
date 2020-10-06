import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsAssociatedUsersComponent } from './user-settings-associated-users.component';

describe('UserSettingsAssociatedUsersComponent', () => {
  let component: UserSettingsAssociatedUsersComponent;
  let fixture: ComponentFixture<UserSettingsAssociatedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsAssociatedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsAssociatedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
