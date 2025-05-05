import { ShiftWorkerModel } from "./ShiftWorkerModel"

export class ShiftPerDayModel {
    aantalUrenNeeded:number
    aantalUrenFilled:number
    id:number
    filled:boolean
    assignedWorkers:Array<ShiftWorkerModel>
    shiftDate:Date

    constructor()
    constructor(aantalUrenNeeded:number,id:number, filled:boolean, assignedWorkers:Array<ShiftWorkerModel>,shiftDate:Date)
    constructor(aantalUrenNeeded?:number,id?:number, filled?:boolean, assignedWorkers?:Array<ShiftWorkerModel>,shiftDate?:Date) {
        this.aantalUrenNeeded = aantalUrenNeeded ?? 0
        this.id = id ?? 0
        this.filled = filled ?? false
        this.assignedWorkers = assignedWorkers ?? new Array<ShiftWorkerModel>
        this.shiftDate = shiftDate ?? new Date()
        this.aantalUrenFilled = 0
      }

}