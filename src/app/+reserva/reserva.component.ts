import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ReservaDto} from "../dto/reservaDto";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit,OnDestroy {

    mesaDto: ReservaDto = new ReservaDto();

  constructor(private _router: Router) { }

  ngOnInit() {

      var obj = JSON.parse(sessionStorage.getItem('objectSession'));
      if(obj !=null){
          this.mesaDto = obj;
      }
      this.mesaDto.mesa = sessionStorage.getItem('mesaSeleccionada');
  }

  verDisponibiliddadMesa(){
      sessionStorage.setItem('objectSession',JSON.stringify(this.mesaDto));
      this._router.navigate(['/verDisponibilidadMesa']);
  }

    ngOnDestroy(): void {

    }

    cancelarReserva(){
        sessionStorage.setItem('objectSession',null);
        sessionStorage.setItem('mesaSeleccionada','');
        this._router.navigate(['/reservaConsulta']);
    }

    guardarReserva(){
        this._router.navigate(['/reservaConsulta']);
    }

}
