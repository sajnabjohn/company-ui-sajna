import { TestBed } from '@angular/core/testing';

import { AgentDashboardService } from './agent-dashboard.service';

describe('AgentDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentDashboardService = TestBed.get(AgentDashboardService);
    expect(service).toBeTruthy();
  });
});
