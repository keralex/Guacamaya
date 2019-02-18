import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAvionesComponent } from './registrar-aviones.component';

describe('RegistrarAvionesComponent', () => {
  let component: RegistrarAvionesComponent;
  let fixture: ComponentFixture<RegistrarAvionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAvionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
