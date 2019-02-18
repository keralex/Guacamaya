import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFallasComponent } from './registro-fallas.component';

describe('RegistroFallasComponent', () => {
  let component: RegistroFallasComponent;
  let fixture: ComponentFixture<RegistroFallasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroFallasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
