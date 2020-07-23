import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectIdentity } from './connect-identity';

describe('AddUserServiceIdentityComponent', () => {
  let component: ConnectIdentity;
  let fixture: ComponentFixture<ConnectIdentity>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectIdentity ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectIdentity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
