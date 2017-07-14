import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VerDisponibilidadComponent} from "./verDisponibilidadMesa.component";
/**
 * Created by javier on 7/13/17.
 */
export const verDisponibilidadMesaRoutes: Routes = [
    {
        path: '',
        component: VerDisponibilidadComponent,
        data: {
            pageTitle: 'DisponibilidadMesa'
        }
    }
];

export const verDisponibilidadMesaRouting: ModuleWithProviders = RouterModule.forChild(verDisponibilidadMesaRoutes);

