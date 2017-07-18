import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ReservaResult} from "../dto/reservaResult";
import {Mesa} from "../dto/Mesa";
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
    public mesaResult: Mesa[] = [];

    constructor(private _router: Router) { }

    ngOnInit() {

    }

    volver(){
        this._router.navigate(['/reserva']);
    }
}
