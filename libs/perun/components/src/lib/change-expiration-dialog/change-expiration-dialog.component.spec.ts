import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeExpirationDialogComponent } from '@perun-web-apps/perun/components';

describe('ChangeExpirationDialogComponent', () => {
  let component: ChangeExpirationDialogComponent;
  let fixture: ComponentFixture<ChangeExpirationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeExpirationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeExpirationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
