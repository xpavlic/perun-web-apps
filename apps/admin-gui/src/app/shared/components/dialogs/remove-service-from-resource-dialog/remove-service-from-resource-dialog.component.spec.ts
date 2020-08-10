import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveServiceFromResourceDialogComponent } from './remove-service-from-resource-dialog.component';

describe('RemoveServiceFromResourceDialogComponent', () => {
  let component: RemoveServiceFromResourceDialogComponent;
  let fixture: ComponentFixture<RemoveServiceFromResourceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveServiceFromResourceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveServiceFromResourceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
