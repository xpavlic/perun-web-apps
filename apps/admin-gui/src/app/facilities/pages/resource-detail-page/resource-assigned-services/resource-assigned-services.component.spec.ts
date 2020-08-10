import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAssignedServicesComponent } from './resource-assigned-services.component';

describe('ResourceAssignedServicesComponent', () => {
  let component: ResourceAssignedServicesComponent;
  let fixture: ComponentFixture<ResourceAssignedServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceAssignedServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceAssignedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
