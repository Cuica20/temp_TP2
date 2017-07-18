import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ReservaResult} from "../dto/reservaResult";
import {Mesa} from "../dto/Mesa";
import {AppService} from "../service/app.service";
import {Reserva} from "../dto/Reserva";
import {StoreSessionFilter} from "../dto/StoreSessionFilter";
/**
 * Created by javier on 7/13/17.
 */

declare var $:any;

@Component({
    selector: 'app-verDisponibilidadMesa',
    templateUrl: './verDisponibilidadMesa.component.html',
    styleUrls: ['./verDisponibilidadMesa.component.css'],
    providers: [AppService]
})
export class VerDisponibilidadComponent implements OnInit {

    public mesaResult: Mesa[] = [];
    reservaResult: Reserva = new Reserva();


    constructor(private _router: Router,
                private appService: AppService) { }

    ngOnInit(){

        this.reservaResult = JSON.parse(sessionStorage.getItem('objectSession'));
        if(this.reservaResult.dni !=null){
            this.getMesaDisponibles(this.reservaResult.dni);
        }else{
            this.getMesaDisponibles('99999999');
        }


    }

    getMesaDisponibles(data: any){
        this.appService.getDisponibilidadMesas(data).subscribe(
            (data:any) => {
                this.mesaResult = data;
            },
            error => {
                /*this.msgs.push({severity:'error', summary:'Error Message', detail:error.error});*/
            }
        );
    }

    selectedTable(dataItem: any){

        sessionStorage.setItem('mesaSeleccionadaID',JSON.stringify(dataItem));
        this._router.navigate(['/reserva']);
    }

    volver(){
        this._router.navigate(['/reserva']);
    }

}
