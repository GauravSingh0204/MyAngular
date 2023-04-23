import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header20Component } from './header2.0.component';

describe('Header20Component', () => {
  let component: Header20Component;
  let fixture: ComponentFixture<Header20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Header20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
