import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacilityOwnerDialogComponent } from './add-facility-owner-dialog.component';

describe('AddFacilityOwnerDialogComponent', () => {
  let component: AddFacilityOwnerDialogComponent;
  let fixture: ComponentFixture<AddFacilityOwnerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFacilityOwnerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFacilityOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
