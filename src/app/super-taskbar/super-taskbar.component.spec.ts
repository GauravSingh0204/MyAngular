import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTaskbarComponent } from './super-taskbar.component';

describe('SuperTaskbarComponent', () => {
  let component: SuperTaskbarComponent;
  let fixture: ComponentFixture<SuperTaskbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperTaskbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperTaskbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
