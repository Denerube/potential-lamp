import { Component, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-per-day',
  standalone: true,
  imports: [],
  templateUrl: './per-day.component.html',
  styleUrl: './per-day.component.scss'
})
export class PerDayComponent {
  dayNumber = input(0);
  monthNumber = input(0);
  year = signal(new Date().getFullYear());
  


}
