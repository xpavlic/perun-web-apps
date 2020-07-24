import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFacilityDialogComponent } from './create-facility-dialog.component';

describe('CreateFacilityDialogComponent', () => {
  let component: CreateFacilityDialogComponent;
  let fixture: ComponentFixture<CreateFacilityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFacilityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFacilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
