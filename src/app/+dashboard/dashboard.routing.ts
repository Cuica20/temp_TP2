/**
 * Created by javier on 7/22/17.
 */
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {Dashboard} from "./dashboard.component";

export const dashboardRoutes: Routes = [
    {
        path: '',
        component: Dashboard,
        data: {
            pageTitle: 'Gesti\u00f3n de Atenci\u00f3n al Cliente'
        }
    }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
