import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVueloComponent } from './eliminar-vuelo.component';

describe('EliminarVueloComponent', () => {
  let component: EliminarVueloComponent;
  let fixture: ComponentFixture<EliminarVueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarVueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
