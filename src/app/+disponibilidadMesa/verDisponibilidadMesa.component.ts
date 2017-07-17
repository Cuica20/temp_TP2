import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ReservaResult} from "../dto/reservaResult";
/**
 * Created by javier on 7/13/17.
 */

declare var $:any;

@Component({
    selector: 'app-verDisponibilidadMesa',
    templateUrl: './verDisponibilidadMesa.component.html',
    styleUrls: ['./verDisponibilidadMesa.component.css']
})
export class VerDisponibilidadComponent implements OnInit {

    meetingList = ['a', 'b', 'c'];
    public reservaResult: ReservaResult[] = [];

    constructor(private _router: Router) { }

    ngOnInit() {
        $(".seat").click(function(event) {
            /*alert( "Desea seleccionar la mesa "+event.target.id+"?" );*/
            sessionStorage.setItem('mesaSeleccionada',event.target.id);
        })

    }

    volver(){
        debugger;
        this._router.navigate(['/reserva']);
    }
}
