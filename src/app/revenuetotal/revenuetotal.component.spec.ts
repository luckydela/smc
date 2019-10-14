import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuetotalComponent } from './revenuetotal.component';

describe('RevenuetotalComponent', () => {
  let component: RevenuetotalComponent;
  let fixture: ComponentFixture<RevenuetotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenuetotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuetotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
