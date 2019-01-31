import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarMantenimientoComponent } from './asignar-mantenimiento.component';

describe('AsignarMantenimientoComponent', () => {
  let component: AsignarMantenimientoComponent;
  let fixture: ComponentFixture<AsignarMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
