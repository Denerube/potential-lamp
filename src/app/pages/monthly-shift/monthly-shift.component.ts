import { Component, inject, input, Input, signal, WritableSignal } from '@angular/core';
import { Observable, single } from 'rxjs';
import {PlanshiftService} from '../../services/planshift.service'
import { PerDayComponent } from '../../components/per-day/per-day.component';
import { WorkerListComponent } from '../../components/worker-list/worker-list.component';


@Component({
  selector: 'app-monthly-shift',
  standalone: true,
  imports: [PerDayComponent,WorkerListComponent],
  templateUrl: './monthly-shift.component.html',
  styleUrl: './monthly-shift.component.scss'
})
export class MonthlyShiftComponent {
  monthNumber = signal(0);
  amountOfDays= signal<number[]>([]);
  planshiftService:PlanshiftService = inject(PlanshiftService)

  @Input()
    set id(id: number) {
      this.monthNumber.set(id)
      const numberNeeded = this.planshiftService.getDaysInMonth(this.monthNumber())
      const amountArray = Array(numberNeeded).fill(0).map((x,i)=>i);
      this.amountOfDays.set(amountArray) 
    }    

}
