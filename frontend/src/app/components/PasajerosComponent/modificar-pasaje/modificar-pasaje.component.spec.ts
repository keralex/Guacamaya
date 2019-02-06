import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPasajeComponent } from './modificar-pasaje.component';

describe('ModificarPasajeComponent', () => {
  let component: ModificarPasajeComponent;
  let fixture: ComponentFixture<ModificarPasajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPasajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
