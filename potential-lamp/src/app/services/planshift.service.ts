import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api/core';


@Injectable({
  providedIn: 'root'
})
export class PlanshiftService {

  constructor() { }
  
  getDaysInMonth(month: number, year: number = new Date().getFullYear()): number {
    return new Date(year, month, 0).getDate();
  }

   async getTestTaur(){
    let result = await invoke("greet") as string;
    return result;
  }
}
