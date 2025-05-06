import { Component, input } from '@angular/core';
import { ShiftWorkerModel } from '../../models/ShiftWorkerModel';
import { empty } from 'rxjs';

@Component({
  selector: 'app-worker-item',
  standalone: true,
  imports: [],
  templateUrl: './worker-item.component.html',
  styleUrl: './worker-item.component.scss'
})
export class WorkerItemComponent {
  worker = input.required<ShiftWorkerModel>();

}
