/**
 * Created by javier on 6/15/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReservaConsultaComponent} from "./reserva.consulta.component";
import {reservaConsultaRouting} from "./reserva.consulta.routing";

@NgModule({
    imports: [
        CommonModule,
        reservaConsultaRouting
    ],
    declarations: [ReservaConsultaComponent]
})
export class ReservaConsultaModule { }
