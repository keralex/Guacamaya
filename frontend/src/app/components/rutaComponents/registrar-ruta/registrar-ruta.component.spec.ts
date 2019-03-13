import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRutaComponent } from './registrar-ruta.component';

describe('RegistrarRutaComponent', () => {
  let component: RegistrarRutaComponent;
  let fixture: ComponentFixture<RegistrarRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
