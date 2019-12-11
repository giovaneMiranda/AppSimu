import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina1Page } from './pagina1.page';

describe('Pagina1Page', () => {
  let component: Pagina1Page;
  let fixture: ComponentFixture<Pagina1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
