import { Component, inject, input, Input, signal, WritableSignal } from '@angular/core';
import {PlanshiftService} from '../../services/planshift.service'
import { PerDayComponent } from '../../components/per-day/per-day.component';
import { ShiftWorkerModel } from '../../models/ShiftWorkerModel';
import { WorkerItemComponent } from '../../components/worker-item/worker-item.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EqualWidthDirective } from '../../directives/equal-width.directive';


@Component({
  selector: 'app-monthly-shift',
  standalone: true,
  imports: [PerDayComponent,WorkerItemComponent,DragDropModule,EqualWidthDirective],
  templateUrl: './monthly-shift.component.html',
  styleUrl: './monthly-shift.component.scss'
})
export class MonthlyShiftComponent {
  monthNumber = signal(0);
  amountOfDays= signal<number[]>([]);
  planshiftService:PlanshiftService = inject(PlanshiftService)
  workers = signal<ShiftWorkerModel[]>([]);

  @Input()
  set id(id: number) {
      this.monthNumber.set(id)
      const numberNeeded = this.planshiftService.getDaysInMonth(this.monthNumber())
      const amountArray = Array(numberNeeded).fill(0).map((x,i)=>i);
      this.amountOfDays.set(amountArray) 
    } 

  ngOnInit(): void {
        this.planshiftService.getAllWorkers().then((m)=>{
          this.workers.set(m)
        });
      } 
  
  

   

}
