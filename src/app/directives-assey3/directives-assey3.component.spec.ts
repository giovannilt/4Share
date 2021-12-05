import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAssey3Component } from './directives-assey3.component';

describe('DirectivesAssey3Component', () => {
  let component: DirectivesAssey3Component;
  let fixture: ComponentFixture<DirectivesAssey3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesAssey3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesAssey3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
