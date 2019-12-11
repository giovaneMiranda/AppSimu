import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina4Page } from './pagina4.page';

describe('Pagina4Page', () => {
  let component: Pagina4Page;
  let fixture: ComponentFixture<Pagina4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
