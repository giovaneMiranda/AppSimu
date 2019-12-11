import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina5Page } from './pagina5.page';

describe('Pagina5Page', () => {
  let component: Pagina5Page;
  let fixture: ComponentFixture<Pagina5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
