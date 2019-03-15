import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPistaComponent } from './eliminar-pista.component';

describe('EliminarPistaComponent', () => {
  let component: EliminarPistaComponent;
  let fixture: ComponentFixture<EliminarPistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarPistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
