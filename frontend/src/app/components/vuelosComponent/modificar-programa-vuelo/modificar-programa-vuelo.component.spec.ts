import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarProgramaVueloComponent } from './modificar-programa-vuelo.component';

describe('ModificarProgramaVueloComponent', () => {
  let component: ModificarProgramaVueloComponent;
  let fixture: ComponentFixture<ModificarProgramaVueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarProgramaVueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarProgramaVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
