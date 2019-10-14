import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfstckersalegraphComponent } from './hfstckersalegraph.component';

describe('HfstckersalegraphComponent', () => {
  let component: HfstckersalegraphComponent;
  let fixture: ComponentFixture<HfstckersalegraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfstckersalegraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfstckersalegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
