import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Man } from './man';

describe('Man', () => {
  let component: Man;
  let fixture: ComponentFixture<Man>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Man],
    }).compileComponents();

    fixture = TestBed.createComponent(Man);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
