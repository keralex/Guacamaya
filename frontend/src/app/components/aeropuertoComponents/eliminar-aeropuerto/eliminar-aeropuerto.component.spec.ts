import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAeropuertoComponent } from './eliminar-aeropuerto.component';

describe('EliminarAeropuertoComponent', () => {
  let component: EliminarAeropuertoComponent;
  let fixture: ComponentFixture<EliminarAeropuertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarAeropuertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
