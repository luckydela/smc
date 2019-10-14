import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HftopmosttotalsComponent } from './hftopmosttotals.component';

describe('HftopmosttotalsComponent', () => {
  let component: HftopmosttotalsComponent;
  let fixture: ComponentFixture<HftopmosttotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HftopmosttotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HftopmosttotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
