import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentUpdationComponent } from './indent-updation.component';

describe('IndentUpdationComponent', () => {
  let component: IndentUpdationComponent;
  let fixture: ComponentFixture<IndentUpdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentUpdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
