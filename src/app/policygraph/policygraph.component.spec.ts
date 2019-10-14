import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicygraphComponent } from './policygraph.component';

describe('PolicygraphComponent', () => {
  let component: PolicygraphComponent;
  let fixture: ComponentFixture<PolicygraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicygraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicygraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
