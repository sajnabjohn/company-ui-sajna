import { TestBed } from '@angular/core/testing';

import { AgentProfileService } from './agent-profile.service';

describe('AgentProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentProfileService = TestBed.get(AgentProfileService);
    expect(service).toBeTruthy();
  });
});
