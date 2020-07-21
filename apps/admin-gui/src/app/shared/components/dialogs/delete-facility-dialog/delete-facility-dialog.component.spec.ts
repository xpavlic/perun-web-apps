import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFacilityDialogComponent } from './delete-facility-dialog.component';

describe('DeleteFacilityDialogComponent', () => {
  let component: DeleteFacilityDialogComponent;
  let fixture: ComponentFixture<DeleteFacilityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFacilityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFacilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
