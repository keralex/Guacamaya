import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVueloComponent } from './admin-vuelo.component';

describe('AdminVueloComponent', () => {
  let component: AdminVueloComponent;
  let fixture: ComponentFixture<AdminVueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
