import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyrevtrendsComponent } from './dailyrevtrends.component';

describe('DailyrevtrendsComponent', () => {
  let component: DailyrevtrendsComponent;
  let fixture: ComponentFixture<DailyrevtrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyrevtrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyrevtrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
