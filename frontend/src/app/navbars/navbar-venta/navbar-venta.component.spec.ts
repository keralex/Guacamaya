import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVentaComponent } from './navbar-venta.component';

describe('NavbarVentaComponent', () => {
  let component: NavbarVentaComponent;
  let fixture: ComponentFixture<NavbarVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
