import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignServiceToResourceDialogComponent } from './assign-service-to-resource-dialog.component';

describe('AssignServiceToResourceDialogComponent', () => {
  let component: AssignServiceToResourceDialogComponent;
  let fixture: ComponentFixture<AssignServiceToResourceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignServiceToResourceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignServiceToResourceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
