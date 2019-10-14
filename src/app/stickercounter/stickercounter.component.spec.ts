import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickercounterComponent } from './stickercounter.component';

describe('StickercounterComponent', () => {
  let component: StickercounterComponent;
  let fixture: ComponentFixture<StickercounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickercounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickercounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
