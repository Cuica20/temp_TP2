/**
 * Created by javier on 6/15/17.
 */
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ReservaConsultaComponent} from "./reserva.consulta.component";

export const reservaConsultaRoutes: Routes = [
    {
        path: '',
        component: ReservaConsultaComponent,
        data: {
            pageTitle: 'ReservaConsulta'
        }
    }
];

export const reservaConsultaRouting: ModuleWithProviders = RouterModule.forChild(reservaConsultaRoutes);
