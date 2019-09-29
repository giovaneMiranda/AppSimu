import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprenderPage } from './aprender.page';

describe('AprenderPage', () => {
  let component: AprenderPage;
  let fixture: ComponentFixture<AprenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprenderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
