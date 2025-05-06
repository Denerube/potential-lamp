import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api/core';
import { ShiftWorkerModel } from '../models/ShiftWorkerModel';


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

  private BuildShiftWorker (input:any):ShiftWorkerModel{
    let map = new Map(Object.entries(input["working_hours_per_date"])) as unknown as Map<number,number>
    return new ShiftWorkerModel(input["parent"]["id"],input["parent"]["name"],map)
  }

 

   async getAllWorkers():Promise<ShiftWorkerModel[]>{
    let result:any[] = await invoke("get_all_shift_workers")as any[];
    return result.map(i => this.BuildShiftWorker(i))

  }
}
