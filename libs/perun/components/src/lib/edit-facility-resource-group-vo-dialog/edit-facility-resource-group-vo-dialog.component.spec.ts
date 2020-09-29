import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacilityResourceGroupVoDialogComponent } from './edit-facility-resource-group-vo-dialog.component';

describe('EditFacilityResourceGroupVoDialogComponent', () => {
  let component: EditFacilityResourceGroupVoDialogComponent;
  let fixture: ComponentFixture<EditFacilityResourceGroupVoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFacilityResourceGroupVoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFacilityResourceGroupVoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
