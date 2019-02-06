import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajerosAbordoComponent } from './pasajeros-abordo.component';

describe('PasajerosAbordoComponent', () => {
  let component: PasajerosAbordoComponent;
  let fixture: ComponentFixture<PasajerosAbordoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasajerosAbordoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajerosAbordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
