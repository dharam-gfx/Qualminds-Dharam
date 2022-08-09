import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTut1Component } from './sample-tut1.component';

describe('SampleTut1Component', () => {
  let component: SampleTut1Component;
  let fixture: ComponentFixture<SampleTut1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleTut1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTut1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
