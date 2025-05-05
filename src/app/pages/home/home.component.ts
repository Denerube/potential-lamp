import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PlanshiftService } from '../../services/planshift.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  months = signal<Map<number, string>>(new Map<number, string>);
  planshiftService:PlanshiftService = inject(PlanshiftService)

  
  ngOnInit(): void {
    this.planshiftService.getMothsMap().then((m)=>{
      this.months.set(m)
    });

    this.planshiftService.getTestTaur().then((m)=>{
      console.log(m);
    })
  } 

}
