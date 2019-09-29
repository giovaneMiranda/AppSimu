import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivosPage } from './ativos.page';

describe('AtivosPage', () => {
  let component: AtivosPage;
  let fixture: ComponentFixture<AtivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
