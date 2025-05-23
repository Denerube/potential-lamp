import { Component, input, Input, signal } from '@angular/core';
import { ShiftPerDayModel } from '../../models/ShiftPerDayModel';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-per-day',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './per-day.component.html',
  styleUrl: './per-day.component.scss'
})
export class PerDayComponent {
  dayNumber = input(0);
  monthNumber = input(0);
  year = signal(new Date().getFullYear());
  shiftPerDay = signal(new ShiftPerDayModel());

   drop(event: CdkDragDrop<string[]>) {
    console.log(event.item.data)

  }

  constructor(){
    this.shiftPerDay().shiftDate = new Date(this.year(),this.monthNumber(),this.dayNumber())
    this.shiftPerDay().aantalUrenFilled = 0;
    this.shiftPerDay().aantalUrenNeeded = 40;
    this.shiftPerDay().assignedWorkers = new Array();
    this.shiftPerDay().filled = false;
  }
  


}
