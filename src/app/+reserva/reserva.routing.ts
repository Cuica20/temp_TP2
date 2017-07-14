/**
 * Created by javier on 6/13/17.
 */

import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ReservaComponent} from "./reserva.component";

export const reservaRoutes: Routes = [
    {
        path: '',
        component: ReservaComponent,
        data: {
            pageTitle: 'Reserva'
        }
    }
];

export const reservaRouting: ModuleWithProviders = RouterModule.forChild(reservaRoutes);

