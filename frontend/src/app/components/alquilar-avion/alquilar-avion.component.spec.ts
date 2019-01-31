import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilarAvionComponent } from './alquilar-avion.component';

describe('AlquilarAvionComponent', () => {
  let component: AlquilarAvionComponent;
  let fixture: ComponentFixture<AlquilarAvionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilarAvionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
