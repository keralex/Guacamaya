import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPasajeroComponent } from './registrar-pasajero.component';

describe('RegistrarPasajeroComponent', () => {
  let component: RegistrarPasajeroComponent;
  let fixture: ComponentFixture<RegistrarPasajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPasajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
