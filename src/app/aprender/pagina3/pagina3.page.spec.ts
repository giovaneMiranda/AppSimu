import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina3Page } from './pagina3.page';

describe('Pagina3Page', () => {
  let component: Pagina3Page;
  let fixture: ComponentFixture<Pagina3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
