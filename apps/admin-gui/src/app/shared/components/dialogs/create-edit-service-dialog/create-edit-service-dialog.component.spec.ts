import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditServiceDialogComponent } from './create-edit-service-dialog.component';

describe('CreateServiceDialogComponent', () => {
  let component: CreateEditServiceDialogComponent;
  let fixture: ComponentFixture<CreateEditServiceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditServiceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditServiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
