import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajesVendidosComponent } from './pasajes-vendidos.component';

describe('PasajesVendidosComponent', () => {
  let component: PasajesVendidosComponent;
  let fixture: ComponentFixture<PasajesVendidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasajesVendidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajesVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
