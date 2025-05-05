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

  async getMothsMap():Promise<Map<number, string>>{
    let result = await invoke("get_moths_map") as Map<number,string>;
    return new Map(Object.entries(result)) as unknown as Map<number,string>
  }

   async getTestTaur(){
    let result = await invoke("get_all_shift_workers");
    return result;
  }
}
