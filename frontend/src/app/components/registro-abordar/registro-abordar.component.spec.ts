import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAbordarComponent } from './registro-abordar.component';

describe('RegistroAbordarComponent', () => {
  let component: RegistroAbordarComponent;
  let fixture: ComponentFixture<RegistroAbordarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAbordarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAbordarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
