import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPistaComponent } from './registrar-pista.component';

describe('RegistrarPistaComponent', () => {
  let component: RegistrarPistaComponent;
  let fixture: ComponentFixture<RegistrarPistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
