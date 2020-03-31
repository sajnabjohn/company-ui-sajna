import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyTypeComponent } from './copy-type.component';

describe('CopyTypeComponent', () => {
  let component: CopyTypeComponent;
  let fixture: ComponentFixture<CopyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
