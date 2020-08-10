import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValueDialogComponent } from './show-value-dialog.component';

describe('ShowValueDialogComponent', () => {
  let component: ShowValueDialogComponent;
  let fixture: ComponentFixture<ShowValueDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowValueDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowValueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
