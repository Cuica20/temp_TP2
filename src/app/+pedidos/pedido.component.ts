import { Component, OnInit } from '@angular/core';
import {Pedido} from "../interfaz/pedido";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

    gridView: Pedido[];
    pageSize: number = 10;
    skip: number = 0;



    constructor() { }

    ngOnInit() {

        this.gridView = [
            {
                "idPedido": 1,
                "cliente": "Chai",
                "pedido": "juan",
                "direccion": "siempre viva, springfield",
                "horaLlegada": "9 pm"
            },
            {
                "idPedido": 2,
                "cliente": "Chai",
                "pedido": "juan",
                "direccion": "siempre viva, springfield",
                "horaLlegada": "9 pm"
            }
        ]
    }

    onSearch(){

    }

}
