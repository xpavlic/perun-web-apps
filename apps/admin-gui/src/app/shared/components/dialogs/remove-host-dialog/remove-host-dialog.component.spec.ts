import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveHostDialogComponent } from './remove-host-dialog.component';

describe('RemoveHostDialogComponent', () => {
  let component: RemoveHostDialogComponent;
  let fixture: ComponentFixture<RemoveHostDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveHostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveHostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
