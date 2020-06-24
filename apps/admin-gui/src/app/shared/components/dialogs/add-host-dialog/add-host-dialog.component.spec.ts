import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHostDialogComponent } from './add-host-dialog.component';

describe('AddHostDialogComponent', () => {
  let component: AddHostDialogComponent;
  let fixture: ComponentFixture<AddHostDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
