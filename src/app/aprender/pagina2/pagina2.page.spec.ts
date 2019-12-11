import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina2Page } from './pagina2.page';

describe('Pagina2Page', () => {
  let component: Pagina2Page;
  let fixture: ComponentFixture<Pagina2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
