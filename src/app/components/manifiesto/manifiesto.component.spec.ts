import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifiestoComponent } from './manifiesto.component';

describe('ManifiestoComponent', () => {
  let component: ManifiestoComponent;
  let fixture: ComponentFixture<ManifiestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifiestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifiestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
