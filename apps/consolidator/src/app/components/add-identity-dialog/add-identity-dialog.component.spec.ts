import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdentityDialogComponent } from './add-identity-dialog.component';

describe('AddIdentityDialogComponent', () => {
  let component: AddIdentityDialogComponent;
  let fixture: ComponentFixture<AddIdentityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIdentityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIdentityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
