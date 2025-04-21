import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyShiftComponent } from './monthly-shift.component';

describe('MonthlyShiftComponent', () => {
  let component: MonthlyShiftComponent;
  let fixture: ComponentFixture<MonthlyShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyShiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
