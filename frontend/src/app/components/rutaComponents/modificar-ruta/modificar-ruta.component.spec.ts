import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRutaComponent } from './modificar-ruta.component';

describe('ModificarRutaComponent', () => {
  let component: ModificarRutaComponent;
  let fixture: ComponentFixture<ModificarRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
