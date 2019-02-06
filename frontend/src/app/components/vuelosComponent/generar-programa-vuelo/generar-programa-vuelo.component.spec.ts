import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarProgramaVueloComponent } from './generar-programa-vuelo.component';

describe('GenerarProgramaVueloComponent', () => {
  let component: GenerarProgramaVueloComponent;
  let fixture: ComponentFixture<GenerarProgramaVueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarProgramaVueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarProgramaVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
