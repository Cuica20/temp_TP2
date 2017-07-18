/**
 * Created by javier on 6/15/17.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ReservaResult} from "../dto/reservaResult";
import {ConfirmationService, Message} from "primeng/primeng";
import {ReservaFilter} from "../dto/ReservaFilter";
import {AppService} from "../service/app.service";

@Component({
    selector: 'app-reserva-consulta',
    templateUrl: './reserva.consulta.component.html',
    styleUrls: ['./reserva.consulta.component.scss']
})
export class ReservaConsultaComponent implements OnInit {

    public reservaResult: ReservaResult[] = [];

    msgs: Message[] = [];
    reservafilter: ReservaFilter = new ReservaFilter();


    constructor(private router: Router, private appService: AppService,private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.getReserva();
    }

    getReserva(){
        this.appService.getReservaConsulta(this.reservafilter).subscribe(
            (data:any) => {
                this.reservaResult = data;
            },
            error => {
                /*this.msgs.push({severity:'error', summary:'Error Message', detail:error.error});*/
            }
        );
    }
    anularReserva(dataItem: any){
        this.confirmationService.confirm({
            message: 'Desea Anular la Reserva?',
            accept: () => {
                this.appService.anularReserva(dataItem).subscribe(
                    (data: any) => {
                        if (data.codigo == 1) {
                            this.msgs.push({severity:'success', summary:'Success Message', detail:'Reserva Anulada'});
                            this.getReserva();
                        }
                    },
                    error => {
                        this.msgs.push({severity:'error', summary:'Error Message', detail:error.error});
                    }
                );
            }
        });

    }

    busquedaReserva(){
        this.appService.getReservaConsulta(this.reservafilter).subscribe(
            (data: any) => {
                this.reservaResult = data;
            },
            error => {
                this.msgs.push({severity:'error', summary:'Error Message', detail:error.error});
            }
        );

    }

    nuevaReserva(){
        this.router.navigate(['/reserva']);
    }

    irDetalle(data: ReservaResult){

        sessionStorage.setItem('idDetalleReserva',data.cod_reserva);
        this.router.navigate(['/reserva']);
    }

}
