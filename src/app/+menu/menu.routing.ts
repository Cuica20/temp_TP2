/**
 * Created by javier on 6/11/17.
 */
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ModuleWithProviders} from "@angular/core";
import {MenuComponent} from "./menu.component";

export const menuRoutes: Routes = [
    {
        path: '',
        component: MenuComponent,
        data: {
            pageTitle: 'Menu'
        }
    }
];

export const menuRouting: ModuleWithProviders = RouterModule.forChild(menuRoutes);

