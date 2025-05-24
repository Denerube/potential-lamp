import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-shift-day',
  standalone: true,
  imports: [],
  templateUrl: './shift-day.component.html',
  styleUrl: './shift-day.component.scss'
})
export class ShiftDayComponent {
   dateString = signal(new Date());

   @Input()
    set date(date: Date) {
        console.log(date)
        this.dateString.set(date)
    } 

}
