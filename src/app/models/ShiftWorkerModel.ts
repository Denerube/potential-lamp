import { WorkerModel } from "./WorkerModel";

export class ShiftWorkerModel extends WorkerModel {
    workingHoursPerDate:Map<number,number>

    constructor()
    constructor(id:number,name:string,workingHoursPerDate:Map<number,number>,)
    constructor(id?:number,name?:string,workingHoursPerDate?:Map<number,number>,) {
        super(id ?? 0, name ?? ""); 
        this.workingHoursPerDate = workingHoursPerDate ?? new Map<number,number>;
      }
}