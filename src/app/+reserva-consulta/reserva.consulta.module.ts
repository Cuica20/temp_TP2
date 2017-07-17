/**
 * Created by javier on 6/15/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReservaConsultaComponent} from "./reserva.consulta.component";
import {reservaConsultaRouting} from "./reserva.consulta.routing";
import {GrowlModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {AppService} from "../service/app.service";
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        GrowlModule,
        FormsModule,
        ConfirmDialogModule,
        reservaConsultaRouting
    ],
    declarations: [ReservaConsultaComponent],
    providers: [AppService,ConfirmationService]
})
export class ReservaConsultaModule { }
