import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAeropuertoComponent } from './modificar-aeropuerto.component';

describe('ModificarAeropuertoComponent', () => {
  let component: ModificarAeropuertoComponent;
  let fixture: ComponentFixture<ModificarAeropuertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarAeropuertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
