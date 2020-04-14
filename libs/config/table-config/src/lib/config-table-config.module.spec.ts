import { async, TestBed } from '@angular/core/testing';
import { ConfigTableConfigModule } from './config-table-config.module';

describe('ConfigTableConfigModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfigTableConfigModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ConfigTableConfigModule).toBeDefined();
  });
});
