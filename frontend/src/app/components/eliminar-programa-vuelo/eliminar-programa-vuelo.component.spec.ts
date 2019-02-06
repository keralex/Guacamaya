import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProgramaVueloComponent } from './eliminar-programa-vuelo.component';

describe('EliminarProgramaVueloComponent', () => {
  let component: EliminarProgramaVueloComponent;
  let fixture: ComponentFixture<EliminarProgramaVueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarProgramaVueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProgramaVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
