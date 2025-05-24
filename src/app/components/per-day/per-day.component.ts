import { Component, input, Input, signal } from '@angular/core';
import { ShiftPerDayModel } from '../../models/ShiftPerDayModel';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-per-day',
  standalone: true,
  imports: [DragDropModule,RouterLink,RouterLinkActive],
  templateUrl: './per-day.component.html',
  styleUrl: './per-day.component.scss'
})
export class PerDayComponent {
  year = signal(new Date().getFullYear());
  shiftPerDay = signal(new ShiftPerDayModel());
  adjustedDayNumber = signal(0);
  adjustedMonthNumber = signal(0);
  private _monthNumber: number = 0;

   drop(event: CdkDragDrop<string[]>) {
    console.log(event.item.data)

  }

  @Input()
  set dayNumber(dayNumber: number) {
    this.adjustedDayNumber.set(dayNumber + 1)
  }
  @Input()
  set monthNumber(monthNumber: number) {
    this._monthNumber = monthNumber
    this.adjustedMonthNumber.set(Number(monthNumber) + Number(1))
  }

  ngOnInit(){
    this.dayNumber
    this.shiftPerDay().shiftDate = new Date(this.year(),this._monthNumber,this.adjustedDayNumber())
    this.shiftPerDay().aantalUrenFilled = 0;
    this.shiftPerDay().aantalUrenNeeded = 40;
    this.shiftPerDay().assignedWorkers = new Array();
    this.shiftPerDay().filled = false;
  }
  


}
