import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSyncDetailDialogComponent } from './group-sync-detail-dialog.component';

describe('GroupSyncDetailDialogComponent', () => {
  let component: GroupSyncDetailDialogComponent;
  let fixture: ComponentFixture<GroupSyncDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSyncDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSyncDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
