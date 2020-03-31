import { TestBed } from '@angular/core/testing';

import { SubAgentService } from './sub-agent.service';

describe('SubAgentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubAgentService = TestBed.get(SubAgentService);
    expect(service).toBeTruthy();
  });
});
