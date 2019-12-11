import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina6Page } from './pagina6.page';

describe('Pagina6Page', () => {
  let component: Pagina6Page;
  let fixture: ComponentFixture<Pagina6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
