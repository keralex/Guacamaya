import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarVueloSobreventaComponent } from './asignar-vuelo-sobreventa.component';

describe('AsignarVueloSobreventaComponent', () => {
  let component: AsignarVueloSobreventaComponent;
  let fixture: ComponentFixture<AsignarVueloSobreventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarVueloSobreventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarVueloSobreventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
