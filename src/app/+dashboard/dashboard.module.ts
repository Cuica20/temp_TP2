/**
 * Created by javier on 7/22/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReservaConsultaComponent} from "./reserva.consulta.component";
import {reservaConsultaRouting} from "./reserva.consulta.routing";
import {GrowlModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {AppService} from "../service/app.service";
import {ConfirmDialogModule} from 'primeng/primeng';
import {dashboardRouting} from "./dashboard.routing";
import {Dashboard} from "./dashboard.component";

@NgModule({
    imports: [
        CommonModule,
        GrowlModule,
        FormsModule,
        ConfirmDialogModule,
        dashboardRouting
    ],
    declarations: [Dashboard],
    providers: [AppService]
})
export class DashboardModule { }