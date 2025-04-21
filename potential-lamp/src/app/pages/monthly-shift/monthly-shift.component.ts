import { Component, inject, input, Input, signal, WritableSignal } from '@angular/core';
import { Observable, single } from 'rxjs';
import {PlanshiftService} from '../../services/planshift.service'


@Component({
  selector: 'app-monthly-shift',
  standalone: true,
  imports: [],
  templateUrl: './monthly-shift.component.html',
  styleUrl: './monthly-shift.component.scss'
})
export class MonthlyShiftComponent {
  monthNumber = signal(1);
  amountOfDays= signal(0);
  testTaur = signal("test");
  planshiftService:PlanshiftService = inject(PlanshiftService)

  
    @Input()
    set id(id: number) {
      this.monthNumber.set(id)
    } 

    ngOnInit(): void {
      this.amountOfDays.set(this.planshiftService.getDaysInMonth(this.monthNumber()))
      this.planshiftService.getTestTaur().then(m => this.testTaur.set(m))
    } 

}
