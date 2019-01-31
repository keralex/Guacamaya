import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGerenteComponent } from './navbar-gerente.component';

describe('NavbarGerenteComponent', () => {
  let component: NavbarGerenteComponent;
  let fixture: ComponentFixture<NavbarGerenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarGerenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
