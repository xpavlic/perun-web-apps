import { async, TestBed } from '@angular/core/testing';
import { PerunPipesModule } from './perun-pipes.module';

describe('PerunPipesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PerunPipesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PerunPipesModule).toBeDefined();
  });
});
