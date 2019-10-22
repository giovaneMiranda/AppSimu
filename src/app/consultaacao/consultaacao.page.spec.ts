import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaacaoPage } from './consultaacao.page';

describe('ConsultaacaoPage', () => {
  let component: ConsultaacaoPage;
  let fixture: ComponentFixture<ConsultaacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
