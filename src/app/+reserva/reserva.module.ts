/**
 * Created by javier on 6/13/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {reservaRouting} from "./reserva.routing";
import {ReservaComponent} from "./reserva.component";
import {FormsModule} from "@angular/forms";
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ConfirmDialogModule,
        reservaRouting
    ],
    declarations: [ReservaComponent],
    providers: [ConfirmationService]
})
export class ReservaModule { }
