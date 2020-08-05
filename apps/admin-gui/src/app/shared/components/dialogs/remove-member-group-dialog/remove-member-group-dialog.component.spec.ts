import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMemberGroupDialogComponent } from './remove-member-group-dialog.component';

describe('RemoveMemberGroupDialogComponent', () => {
  let component: RemoveMemberGroupDialogComponent;
  let fixture: ComponentFixture<RemoveMemberGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveMemberGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMemberGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
