import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasVueloComponent } from './programas-vuelo.component';

describe('ProgramasVueloComponent', () => {
  let component: ProgramasVueloComponent;
  let fixture: ComponentFixture<ProgramasVueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramasVueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramasVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
