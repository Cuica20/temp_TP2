/**
 * Created by javier on 6/15/17.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-reserva-consulta',
    templateUrl: './reserva.consulta.component.html',
    styleUrls: ['./reserva.consulta.component.scss']
})
export class ReservaConsultaComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {}

    onSearch(){

    }

    nuevaReserva(){
        this.router.navigate(['/reserva']);
    }

    irDetalle(){

    }

}
