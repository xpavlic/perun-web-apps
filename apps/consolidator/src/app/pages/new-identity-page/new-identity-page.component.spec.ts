import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdentityPageComponent } from './new-identity-page.component';

describe('NewIdentityPageComponent', () => {
  let component: NewIdentityPageComponent;
  let fixture: ComponentFixture<NewIdentityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIdentityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIdentityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
