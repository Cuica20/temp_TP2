/**
 * Created by javier on 7/4/17.
 */
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ModuleWithProviders} from "@angular/core";
import {InicioComponent} from "./inicio.component";

export const inicioRoutes: Routes = [
    {
        path: '',
        component: InicioComponent,
        data: {
            pageTitle: 'Inicio'
        }
    }
];

export const inicioRouting: ModuleWithProviders = RouterModule.forChild(inicioRoutes);

