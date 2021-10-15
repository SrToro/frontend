import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircutComponent } from './haircut.component';

describe('HaircutComponent', () => {
  let component: HaircutComponent;
  let fixture: ComponentFixture<HaircutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaircutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
