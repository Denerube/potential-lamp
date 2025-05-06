import { Component, inject, signal } from '@angular/core';
import { PlanshiftService } from '../../services/planshift.service';
import { ShiftWorkerModel } from '../../models/ShiftWorkerModel';
import { WorkerItemComponent } from '../worker-item/worker-item.component';

@Component({
  selector: 'app-worker-list',
  standalone: true,
  imports: [WorkerItemComponent],
  templateUrl: './worker-list.component.html',
  styleUrl: './worker-list.component.scss'
})
export class WorkerListComponent {
    planshiftService:PlanshiftService = inject(PlanshiftService)
    workers = signal<ShiftWorkerModel[]>([]);

    ngOnInit(): void {
      this.planshiftService.getAllWorkers().then((m)=>{
        this.workers.set(m)
      });
    } 
  

}
