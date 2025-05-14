import { Component, input } from '@angular/core';
import { ShiftWorkerModel } from '../../models/ShiftWorkerModel';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EqualWidthDirective } from '../../directives/equal-width.directive';


@Component({
  selector: 'app-worker-item',
  standalone: true,
  imports: [DragDropModule,EqualWidthDirective],
  templateUrl: './worker-item.component.html',
  styleUrl: './worker-item.component.scss'
})
export class WorkerItemComponent {
  worker = input.required<ShiftWorkerModel>();

}
