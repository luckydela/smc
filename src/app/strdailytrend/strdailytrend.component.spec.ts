import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrdailytrendComponent } from './strdailytrend.component';

describe('StrdailytrendComponent', () => {
  let component: StrdailytrendComponent;
  let fixture: ComponentFixture<StrdailytrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrdailytrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrdailytrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
