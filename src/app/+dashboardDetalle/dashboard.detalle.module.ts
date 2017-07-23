import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrowlModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {AppService} from "../service/app.service";
import {DashboardDetalle} from "../+dashboardDetalle/dashboard.detalle.component";
import {dashboardDetalleRouting} from "./dashboard.detalle.routing";
import {GMapModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        GrowlModule,
        FormsModule,
        GMapModule,
        dashboardDetalleRouting
    ],
    declarations: [DashboardDetalle],
    providers: [AppService]
})
export class DashboardDetalleModule { }