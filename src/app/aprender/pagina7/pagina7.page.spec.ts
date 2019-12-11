import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina7Page } from './pagina7.page';

describe('Pagina7Page', () => {
  let component: Pagina7Page;
  let fixture: ComponentFixture<Pagina7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
