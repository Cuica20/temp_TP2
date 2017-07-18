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

  constructor(private _router: Router,
              private appService: AppService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {

      let dniObject = JSON.parse(sessionStorage.getItem('idDetalleReserva'));
      if(dniObject !=null){
          this.obtenerReservaById(dniObject);
      }else{
          this.reservaResult = new Reserva();
          this.reservaResult.tipo_reserva = 'Normal';
          this.reservaResult.nombre_local = 'Angamos';
          this.mesaShow();
      }


  }

  mesaShow(){
     this.getMesaDisponibles('99999999');
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
        this.reservaResult.cod_mesa = dataItem.cod_mesa;
    }

  obtenerReservaById(code: any){

      this.appService.getReservaByCode(code).subscribe(
          data => {
              this.showDetailReserva(data);
          },
          error => {
              /*this.msgs.push({severity:'error', summary:'Error Message', detail:error.error});*/
          }
      );
  }

  verDisponibiliddadMesa(){
  }

  showDetailReserva(data: Reserva){
      this.reservaResult = data;
      this.getMesaDisponibles(this.reservaResult.dni);
  }

    ngOnDestroy(): void {
      /*sessionStorage.removeItem('idDetalleReserva');*/
    }

    cancelarReserva(){
        sessionStorage.setItem('objectSession',null);
        sessionStorage.setItem('mesaSeleccionada','');
        sessionStorage.setItem('mesaSeleccionadaID','');
        this._router.navigate(['/reservaConsulta']);
    }

    guardarReserva(){
        debugger;
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

    yesQuestion(){
        this.display = false;
        this.appService.obtenerUltimaReservaClienteByDNI(this.reservaResult.dni).subscribe(
            (data:Mesa) => {
                this.reservaResult.cod_mesa = data.cod_mesa;
            },
            error => {
            }
        );
    }
    noQuestion(){
        this.display = false;
    }

}
