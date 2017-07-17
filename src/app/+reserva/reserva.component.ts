import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ReservaResult} from "../dto/reservaResult";
import {AppService} from "../service/app.service";
import {ConfirmationService, Message} from "primeng/primeng";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
  providers: [AppService]
})
export class ReservaComponent implements OnInit,OnDestroy {

    msgs: Message[] = [];
    reservaResult: ReservaResult = new ReservaResult();

  constructor(private _router: Router, private appService: AppService,private confirmationService: ConfirmationService) { }

  ngOnInit() {

      let dniObject = JSON.parse(sessionStorage.getItem('editPermisoEmpleadoResult'));
      if(dniObject !=null){
          this.obtenerReservaById(dniObject);
      }

      /*this.reservaResult.mesa = sessionStorage.getItem('mesaSeleccionada');*/
  }

  obtenerReservaById(code: string){
      this.appService.getReservaByCode(code).subscribe(
          data => {
              this.showDetailReserva(data);
          },
          error => {
              this.msgs.push({severity:'error', summary:'Error Message', detail:error.error});
          }
      );
  }

  verDisponibiliddadMesa(){
      sessionStorage.setItem('objectSession',JSON.stringify(this.reservaResult));
      this._router.navigate(['/verDisponibilidadMesa']);
  }

  showDetailReserva(data: any){
      this.reservaResult = data;
  }

    ngOnDestroy(): void {
      sessionStorage.removeItem('idDetalleReserva');
    }

    cancelarReserva(){
        sessionStorage.setItem('objectSession',null);
        sessionStorage.setItem('mesaSeleccionada','');
        this._router.navigate(['/reservaConsulta']);
    }

    guardarReserva(){
        this._router.navigate(['/reservaConsulta']);
    }

    showMessageSuggest(){
        /*if(this.reservaResult. == '47487919')
            alert('Estimado Javier Cuicapuza desea elegir la misma mesa de siempre?');
        this.mesaDto.mesa = 'E-4';*/

        this.confirmationService.confirm({
            message: 'Estimado'+'Javier'+'desea elegir la misma mesa de siempre?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    }

}
