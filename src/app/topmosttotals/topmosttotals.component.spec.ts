import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmosttotalsComponent } from './topmosttotals.component';

describe('TopmosttotalsComponent', () => {
  let component: TopmosttotalsComponent;
  let fixture: ComponentFixture<TopmosttotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopmosttotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmosttotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
