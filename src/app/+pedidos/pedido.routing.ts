/**
 * Created by javier on 6/11/17.
 */
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {PedidoComponent} from "./pedido.component";

export const pedidoRoutes: Routes = [
    {
        path: '',
        component: PedidoComponent,
        data: {
            pageTitle: 'Pedido'
        }
    }
];

export const pedidoRouting: ModuleWithProviders = RouterModule.forChild(pedidoRoutes);

