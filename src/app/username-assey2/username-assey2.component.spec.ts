import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameAssey2Component } from './username-assey2.component';

describe('UsernameAssey2Component', () => {
  let component: UsernameAssey2Component;
  let fixture: ComponentFixture<UsernameAssey2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameAssey2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameAssey2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
