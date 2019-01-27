import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarVueloComponent } from './asignar-vuelo.component';

describe('AsignarVueloComponent', () => {
  let component: AsignarVueloComponent;
  let fixture: ComponentFixture<AsignarVueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarVueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
