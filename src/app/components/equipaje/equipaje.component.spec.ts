import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipajeComponent } from './equipaje.component';

describe('EquipajeComponent', () => {
  let component: EquipajeComponent;
  let fixture: ComponentFixture<EquipajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
