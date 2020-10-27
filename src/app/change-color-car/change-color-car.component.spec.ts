import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeColorCarComponent } from './change-color-car.component';

describe('ChangeColorCarComponent', () => {
  let component: ChangeColorCarComponent;
  let fixture: ComponentFixture<ChangeColorCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeColorCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeColorCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
