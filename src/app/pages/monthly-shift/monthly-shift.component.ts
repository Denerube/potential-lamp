import { Component, inject, input, Input, signal, WritableSignal } from '@angular/core';
import {PlanshiftService} from '../../services/planshift.service'
import { PerDayComponent } from '../../components/per-day/per-day.component';
import { ShiftWorkerModel } from '../../models/ShiftWorkerModel';
import { WorkerItemComponent } from '../../components/worker-item/worker-item.component';
import {CdkDrag, CdkDragDrop, CdkDropList, DragDropModule} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-monthly-shift',
  standalone: true,
  imports: [PerDayComponent,WorkerItemComponent,DragDropModule,CdkDropList,CdkDrag],
  templateUrl: './monthly-shift.component.html',
  styleUrl: './monthly-shift.component.scss'
})
export class MonthlyShiftComponent {
  monthNumber = signal(0);
  amountOfDays= signal<number[]>([]);
  planshiftService:PlanshiftService = inject(PlanshiftService)
  workers = signal<ShiftWorkerModel[]>([]);

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.item)

  }

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
