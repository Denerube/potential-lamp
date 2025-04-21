import { Component, input, Input, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-monthly-shift',
  standalone: true,
  imports: [],
  templateUrl: './monthly-shift.component.html',
  styleUrl: './monthly-shift.component.scss'
})
export class MonthlyShiftComponent {
  monthNumber = signal(1);

    @Input()
    set id(id: number) {
      this.monthNumber.set(id)
    } 

    ngOnInit(): void {
     
      
    } 

}
