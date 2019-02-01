import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPasajeroComponent } from './eliminar-pasajero.component';

describe('EliminarPasajeroComponent', () => {
  let component: EliminarPasajeroComponent;
  let fixture: ComponentFixture<EliminarPasajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarPasajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
