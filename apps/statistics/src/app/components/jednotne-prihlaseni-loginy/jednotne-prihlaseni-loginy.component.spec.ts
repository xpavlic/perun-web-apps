import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JednotnePrihlaseniLoginyComponent } from './jednotne-prihlaseni-loginy.component';

describe('JednotnePrihlaseniLoginyComponent', () => {
  let component: JednotnePrihlaseniLoginyComponent;
  let fixture: ComponentFixture<JednotnePrihlaseniLoginyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JednotnePrihlaseniLoginyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JednotnePrihlaseniLoginyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
