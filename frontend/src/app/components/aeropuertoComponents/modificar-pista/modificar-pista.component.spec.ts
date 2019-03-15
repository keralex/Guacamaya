import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPistaComponent } from './modificar-pista.component';

describe('ModificarPistaComponent', () => {
  let component: ModificarPistaComponent;
  let fixture: ComponentFixture<ModificarPistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
