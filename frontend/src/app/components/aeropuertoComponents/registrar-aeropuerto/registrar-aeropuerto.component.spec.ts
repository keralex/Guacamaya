import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAeropuertoComponent } from './registrar-aeropuerto.component';

describe('RegistrarAeropuertoComponent', () => {
  let component: RegistrarAeropuertoComponent;
  let fixture: ComponentFixture<RegistrarAeropuertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAeropuertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
