import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdminGeneralComponent } from './navbar-admin-general.component';

describe('NavbarAdminGeneralComponent', () => {
  let component: NavbarAdminGeneralComponent;
  let fixture: ComponentFixture<NavbarAdminGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAdminGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdminGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
