/**
 * Created by javier on 7/13/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VerDisponibilidadComponent} from "./verDisponibilidadMesa.component";
import {verDisponibilidadMesaRouting} from "./verDisponibilidadMesa.routing";

@NgModule({
    imports: [
        CommonModule,
        verDisponibilidadMesaRouting
    ],
    declarations: [VerDisponibilidadComponent]
})
export class VerDisponibilidadMesaModule{}