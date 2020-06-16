import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTeamsListComponent } from './security-teams-list.component';

describe('SecurityTeamsListComponent', () => {
  let component: SecurityTeamsListComponent;
  let fixture: ComponentFixture<SecurityTeamsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityTeamsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityTeamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
