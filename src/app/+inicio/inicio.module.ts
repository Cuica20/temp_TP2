/**
 * Created by javier on 7/4/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmartadminModule} from "../shared/smartadmin.module";
import {InicioComponent} from "./inicio.component";
import {inicioRouting} from "./inicio.routing";

@NgModule({
    imports: [
        CommonModule,
        inicioRouting,
        SmartadminModule
    ],
    declarations: [InicioComponent]
})
export class InicioModule { }
