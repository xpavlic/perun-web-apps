import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityTypeSelectionComponent } from './identity-type-selection.component';

describe('IdentityTypeSelectionComponent', () => {
  let component: IdentityTypeSelectionComponent;
  let fixture: ComponentFixture<IdentityTypeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityTypeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
