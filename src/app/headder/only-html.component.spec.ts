import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyHtmlComponent } from './only-html.component';

describe('OnlyHtmlComponent', () => {
  let component: OnlyHtmlComponent;
  let fixture: ComponentFixture<OnlyHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
