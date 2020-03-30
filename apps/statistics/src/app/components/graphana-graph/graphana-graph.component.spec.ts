import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphanaGraphComponent } from './graphana-graph.component';

describe('GraphanaGraphComponent', () => {
  let component: GraphanaGraphComponent;
  let fixture: ComponentFixture<GraphanaGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphanaGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphanaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
