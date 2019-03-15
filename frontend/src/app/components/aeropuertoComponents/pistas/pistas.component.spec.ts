import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PistasComponent } from './pistas.component';

describe('PistasComponent', () => {
  let component: PistasComponent;
  let fixture: ComponentFixture<PistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
