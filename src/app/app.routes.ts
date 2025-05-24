import { Routes } from "@angular/router";
import { MonthlyShiftComponent } from "./pages/monthly-shift/monthly-shift.component";
import { ShiftDayComponent } from "./pages/shift-day/shift-day.component";


export const routes: Routes = [
    {
        path:'',
        //pathmatch is nodig als je een lege path hebt
        pathMatch :'full',
        loadComponent : ()=> {
            return import('./pages/home/home.component').then(
                (m) => m.HomeComponent
            )
        }
    },
    {
        path: "mothlyShift",
        component : MonthlyShiftComponent
    },
     {
        path: "shiftDay",
        component : ShiftDayComponent
    }
];
