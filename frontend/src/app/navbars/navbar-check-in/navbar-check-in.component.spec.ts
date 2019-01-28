import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCheckInComponent } from './navbar-check-in.component';

describe('NavbarCheckInComponent', () => {
  let component: NavbarCheckInComponent;
  let fixture: ComponentFixture<NavbarCheckInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCheckInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
