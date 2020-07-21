import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberToResourceDialogComponent } from './add-member-to-resource-dialog.component';

describe('AddMemberToResourceDialogComponent', () => {
  let component: AddMemberToResourceDialogComponent;
  let fixture: ComponentFixture<AddMemberToResourceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemberToResourceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberToResourceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
