import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFacilityOwnerDialogComponent } from './remove-facility-owner-dialog.component';

describe('RemoveFacilityOwnerDialogComponent', () => {
  let component: RemoveFacilityOwnerDialogComponent;
  let fixture: ComponentFixture<RemoveFacilityOwnerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFacilityOwnerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFacilityOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
