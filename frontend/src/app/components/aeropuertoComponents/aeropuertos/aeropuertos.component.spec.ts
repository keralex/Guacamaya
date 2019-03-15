import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeropuertosComponent } from './aeropuertos.component';

describe('AeropuertosComponent', () => {
  let component: AeropuertosComponent;
  let fixture: ComponentFixture<AeropuertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeropuertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeropuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
