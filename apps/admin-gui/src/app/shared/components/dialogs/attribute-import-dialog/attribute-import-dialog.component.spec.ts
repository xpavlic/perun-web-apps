import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeImportDialogComponent } from './attribute-import-dialog.component';

describe('AttributeImportDialogComponent', () => {
  let component: AttributeImportDialogComponent;
  let fixture: ComponentFixture<AttributeImportDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeImportDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeImportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
