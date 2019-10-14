import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McnfmpasswordComponent } from './mcnfmpassword.component';

describe('McnfmpasswordComponent', () => {
  let component: McnfmpasswordComponent;
  let fixture: ComponentFixture<McnfmpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McnfmpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McnfmpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
