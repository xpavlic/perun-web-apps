import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederationSelectComponent } from './federation-select.component';

describe('FederationSelectComponent', () => {
  let component: FederationSelectComponent;
  let fixture: ComponentFixture<FederationSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederationSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
