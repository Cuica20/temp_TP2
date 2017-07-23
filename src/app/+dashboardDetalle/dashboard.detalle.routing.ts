/**
 * Created by javier on 7/23/17.
 */
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {DashboardDetalle} from "../+dashboardDetalle/dashboard.detalle.component";

export const dashboardDetalleRoutes: Routes = [
    {
        path: '',
        component: DashboardDetalle,
        data: {
            pageTitle: 'Gesti\u00f3n de Atenci\u00f3n al Cliente'
        }
    }
];

export const dashboardDetalleRouting: ModuleWithProviders = RouterModule.forChild(dashboardDetalleRoutes);
