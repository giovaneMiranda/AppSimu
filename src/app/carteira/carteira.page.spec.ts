import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraPage } from './carteira.page';

describe('CarteiraPage', () => {
  let component: CarteiraPage;
  let fixture: ComponentFixture<CarteiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteiraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
