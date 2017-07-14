import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PedidoComponent} from "./pedido.component";
import {pedidoRouting} from "./pedido.routing";

@NgModule({
  imports: [
      CommonModule,
      pedidoRouting
  ],
  declarations: [PedidoComponent]
})
export class PedidoModule { }
