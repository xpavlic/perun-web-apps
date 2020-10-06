import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIdentitiesComponent } from './user-identities.component';

describe('UserIdentitiesComponent', () => {
  let component: UserIdentitiesComponent;
  let fixture: ComponentFixture<UserIdentitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIdentitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIdentitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
