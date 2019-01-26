import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPasajeroComponent } from './datos-pasajero.component';

describe('DatosPasajeroComponent', () => {
  let component: DatosPasajeroComponent;
  let fixture: ComponentFixture<DatosPasajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPasajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
