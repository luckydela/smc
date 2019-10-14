import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuetypeComponent } from './revenuetype.component';

describe('RevenuetypeComponent', () => {
  let component: RevenuetypeComponent;
  let fixture: ComponentFixture<RevenuetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenuetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
