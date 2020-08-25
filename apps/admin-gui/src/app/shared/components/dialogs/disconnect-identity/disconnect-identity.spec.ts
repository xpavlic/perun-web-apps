import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectIdentity } from './disconnect-identity';

describe('RemoveUserServiceIdentityComponent', () => {
  let component: DisconnectIdentity;
  let fixture: ComponentFixture<DisconnectIdentity>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisconnectIdentity ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisconnectIdentity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
