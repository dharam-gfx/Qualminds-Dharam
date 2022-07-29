import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonClickComponent } from './button-click.component';

describe('ButtonClickComponent', () => {
  let component: ButtonClickComponent;
  let fixture: ComponentFixture<ButtonClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
