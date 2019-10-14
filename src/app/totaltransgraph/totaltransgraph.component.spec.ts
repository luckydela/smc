import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaltransgraphComponent } from './totaltransgraph.component';

describe('TotaltransgraphComponent', () => {
  let component: TotaltransgraphComponent;
  let fixture: ComponentFixture<TotaltransgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaltransgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaltransgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
