import { Component, inject, input, Input, signal, WritableSignal } from '@angular/core';
import { Observable, single } from 'rxjs';
import {PlanshiftService} from '../../services/planshift.service'
import { PerDayComponent } from '../../components/per-day/per-day.component';


@Component({
  selector: 'app-monthly-shift',
  standalone: true,
  imports: [PerDayComponent],
  templateUrl: './monthly-shift.component.html',
  styleUrl: './monthly-shift.component.scss'
})
export class MonthlyShiftComponent {
  monthNumber = signal(1);
  amountOfDays= signal<number[]>([]);
  planshiftService:PlanshiftService = inject(PlanshiftService)
  
  constructor() {
    const numberNeeded = this.planshiftService.getDaysInMonth(this.monthNumber())
    const amountArray = Array(numberNeeded).fill(0).map((x,i)=>i);
    this.amountOfDays.set(amountArray) 
  }
  
    @Input()
    set id(id: number) {
      this.monthNumber.set(id)
    } 

}
