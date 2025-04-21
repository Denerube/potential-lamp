import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  months = signal<Map<number, string>>(new Map<number, string>);
  mothsMap = new Map<number, string>();

 
  ngOnInit(): void {
    this.mothsMap.set(1, "jan");
    this.mothsMap.set(2, "feb");
    this.mothsMap.set(3, "mar");
    this.mothsMap.set(4, "apr");
    this.mothsMap.set(5, "may");
    this.mothsMap.set(6, "jun");
    this.mothsMap.set(7, "jul");
    this.mothsMap.set(8, "aug");
    this.mothsMap.set(9, "sep");
    this.mothsMap.set(10, "oct");
    this.mothsMap.set(11, "nov");
    this.mothsMap.set(12, "dec");
    this.months.set(this.mothsMap)
    
  } 

}
