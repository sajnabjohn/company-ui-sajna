import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAgentsComponent } from './sub-agents.component';

describe('SubAgentsComponent', () => {
  let component: SubAgentsComponent;
  let fixture: ComponentFixture<SubAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
