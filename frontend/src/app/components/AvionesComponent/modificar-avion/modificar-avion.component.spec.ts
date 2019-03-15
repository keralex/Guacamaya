import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAvionComponent } from './modificar-avion.component';

describe('ModificarAvionComponent', () => {
  let component: ModificarAvionComponent;
  let fixture: ComponentFixture<ModificarAvionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarAvionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
