class ShiftWorkerModel extends WorkerModel {
    workingHoursPerDate:Map<Date,number>

    constructor()
    constructor(id:number,name:string,workingHoursPerDate:Map<Date,number>,)
    constructor(id?:number,name?:string,workingHoursPerDate?:Map<Date,number>,) {
        super(id ?? 0, name ?? ""); 
        this.id = id ?? 0
        this.name = name ?? "";
        this.workingHoursPerDate = workingHoursPerDate ?? new Map<Date,number>;
      }
}