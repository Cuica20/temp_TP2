import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ReservaResult} from "../dto/reservaResult";
import {AppService} from "../service/app.service";
import {ConfirmationService, Message} from "primeng/primeng";
import {Reserva} from "../dto/Reserva";
import {Cliente} from "../dto/Cliente";
import {Mesa} from "../dto/Mesa";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
  providers: [AppService]
})
export class ReservaComponent implements OnInit,OnDestroy {

    msgs: Message[] = [];
    reservaResult: Reserva = new Reserva();
    mesaSeleccionada: Mesa = new Mesa();
    display: boolean = false;
    public mesaResult: Mesa[] = [];
    mesaUltimaReserva: string;
    showultimaMesa: boolean = false;
    isNew: boolean;

    constructor(private _router: Router,
              private appService: AppService,
              private confirmationService: ConfirmationService) { }

    ngOnInit() {
      let dniObject = JSON.parse(sessionStorage.getItem('idDetalleReserva'));
      this.isNew = JSON.parse(sessionStorage.getItem('isNew'));

      if(dniObject !=null){
          this.obtenerReservaById(dniObject.cod_reserva);
      }else{
          this.reservaResult = new Reserva();
          this.reservaResult.tipo_reserva = 'Normal';
          this.reservaResult.nombre_local = 'Angamos';
      }

    }
    /* -----------------Obtener detalle de la reserva por el cod_reserva----------------- */
    private obtenerReservaById(code: any){
        this.appService.getReservaByCode(code).subscribe(
            (data: Reserva) => {
                debugger;
                this.reservaResult = data;
                this.reservaResult.cod_mesa_anterior = data.cod_mesa;
                this.getMesaDisponibleByDateHour(this.reservaResult);
                /*this.getMesaDisponibles(this.reservaResult.dni);*/
            },
            error => {
                /*this.msgs.push({severity:'error', summary:'Error Message', detail:error.error});*/
            }
        );
    }

    private getMesaDisponibles(data: any){

        this.appService.getDisponibilidadMesas(data).subscribe(
            (data:any) => {
                debugger;
                this.mesaResult = data;
            },
            error => {
                /*this.msgs.push({severity:'error', summary:'Error Message', detail:error.error});*/
            }
        );
    }

    /* -----------------Pregunta si desea reserva la misma mesa de siempre----------------- */
    yesQuestion(){
        this.display = false;
        this.appService.obtenerUltimaReservaClienteByDNI(this.reservaResult.dni).subscribe(
            (data:Mesa) => {
                debugger;
                if(data.nombre_mesa === null){
                    this.msgs.push({severity:'info', summary:'Mensaje', detail:'No posee reservas anteriores'});
                }else{
                    /*if(data.disponibilidad === true){*/
                        /*this.reservaResult.nombre_mesa = data.nombre_mesa;
                        this.reservaResult.cod_mesa = data.cod_mesa;*/
                        this.showultimaMesa = true;
                        this.mesaUltimaReserva = data.nombre_mesa;
                    /*}else{
                        this.msgs.push({severity:'info', summary:'Mensaje', detail:'La mesa que reservo anteriormente ya esta ocupada'});
                    }*/

                }
            },
            error => {
            }
        );
    }
    noQuestion(){
        this.display = false;
    }

    showMessageSuggest($event){
        if ($event.target.value.length == 8) {
            if(this.reservaResult.estado == null){
                this.appService.obtenerInformacionClienteByDNI(this.reservaResult.dni).subscribe(
                    (data:Cliente) => {
                        this.dataCliente(data);
                    },
                    error => {
                    }
                );
            }
        }
    }


    dataCliente(data: Cliente){
        if(data.dni == null){
            this.display = false;
        }else{
            this.display = true;
            this.reservaResult = data;
            this.reservaResult.tipo_reserva = 'Normal';
            this.reservaResult.nombre_local = 'Angamos';
        }
    }

    showMesasDisponibles(){
     this.getMesaDisponibles('99999999');
    }

    selectedTable(dataItem: any){
        debugger;
        this.reservaResult.cod_mesa = dataItem.cod_mesa;
        this.reservaResult.nombre_mesa = dataItem.nombre_mesa;
    }

    cancelarReserva(){
        sessionStorage.setItem('objectSession',null);
        sessionStorage.setItem('mesaSeleccionada','');
        sessionStorage.setItem('mesaSeleccionadaID','');
        this._router.navigate(['/reservaConsulta']);
    }

    onGetFechaReserva($event){
        if ($event.target.value.length === 10) {
            if(this.reservaResult.fecha_reserva != null && this.reservaResult.hora!=null){
                this.getMesaDisponibleByDateHour(this.reservaResult);
            }
        }
    }

    onGetHoraReserva($event){
        if ($event.target.value.length === 5) {
            if(this.reservaResult.fecha_reserva != null && this.reservaResult.hora!=null){
                this.getMesaDisponibleByDateHour(this.reservaResult);
            }
        }
    }

    private getMesaDisponibleByDateHour(dataItem: Reserva){
        this.appService.getMesaDisponibleByDateHour(dataItem).subscribe(
            (data:any) => {
                this.mesaResult = data;
            },
            error => {
                /*this.msgs.push({severity:'error', summary:'Error Message', detail:error.error});*/
            }
        );
    }

    guardarReserva(){
        debugger;
        if(this.reservaResult.fecha_reserva === undefined || this.reservaResult.dni === undefined || this.reservaResult.cod_mesa === undefined || this.reservaResult.nombre_mesa === undefined){
            this.msgs.push({severity:'error', summary:'Reserva', detail:'Falta ingresar datos en la reserva'});
            return;
        }

        this.appService.verDisponibilidadMesa(this.reservaResult.cod_mesa).subscribe(
            (data:Mesa) => {
                debugger;
                if (data.disponibilidad === false) {
                    this.msgs.push({severity:'info', summary:'Reserva', detail:'Mesa no disponible'});
                    return;
                }
            },
            error => {
            }
        );

        if(this.reservaResult.cod_reserva != null){
            this.appService.actualizarReserva(this.reservaResult).subscribe(
                (data:any) => {
                    if (data.codigo == 1) {
                        this.msgs.push({severity:'success', summary:'Success Message', detail:'Reserva actualizada'});
                        setTimeout(() => {
                            this._router.navigate(['/reservaConsulta']);
                        }, 4000);
                    }
                },
                error => {
                }
            );
        }else{
            this.appService.registrarReserva(this.reservaResult).subscribe(
                (data:any) => {
                    if (data.codigo == 1) {
                        this.msgs.push({severity:'success', summary:'Success Message', detail:'Reserva registrada'});
                        setTimeout(() => {
                            this._router.navigate(['/reservaConsulta']);
                        }, 4000);
                    }
                },
                error => {
                }
            );
        }

    }

    ngOnDestroy(): void {
        console.log('ngDestroy idDetalleReserva')
        sessionStorage.removeItem('idDetalleReserva');
    }

}
