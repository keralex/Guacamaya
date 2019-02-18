import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEstadoAvionesComponent } from './modificar-estado-aviones.component';

describe('ModificarEstadoAvionesComponent', () => {
  let component: ModificarEstadoAvionesComponent;
  let fixture: ComponentFixture<ModificarEstadoAvionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarEstadoAvionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarEstadoAvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
