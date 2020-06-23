import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserExtSourceDialogComponent } from './add-user-ext-source-dialog.component';

describe('AddUserExtSourceDialogComponent', () => {
  let component: AddUserExtSourceDialogComponent;
  let fixture: ComponentFixture<AddUserExtSourceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserExtSourceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserExtSourceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
