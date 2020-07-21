import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSettingsManagersComponent } from './resource-settings-managers.component';

describe('ResourceSettingsManagersComponent', () => {
  let component: ResourceSettingsManagersComponent;
  let fixture: ComponentFixture<ResourceSettingsManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceSettingsManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSettingsManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
