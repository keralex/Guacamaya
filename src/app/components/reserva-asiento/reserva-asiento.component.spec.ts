import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaAsientoComponent } from './reserva-asiento.component';

describe('ReservaAsientoComponent', () => {
  let component: ReservaAsientoComponent;
  let fixture: ComponentFixture<ReservaAsientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaAsientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaAsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
