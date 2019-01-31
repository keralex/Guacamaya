import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificarVueloComponent } from './planificar-vuelo.component';

describe('PlanificarVueloComponent', () => {
  let component: PlanificarVueloComponent;
  let fixture: ComponentFixture<PlanificarVueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificarVueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
