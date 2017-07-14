import { Component, OnInit } from '@angular/core';
import {MenuService} from "../menu.service";
import {Menu, Topping} from "../interfaz/menu.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    menus$ = this.menuService.select<Menu[]>('menus');
    toppings$ = this.menuService.select<Topping[]>('toppings');

    constructor(
        private menuService: MenuService
    ) {}

    addMenu(event: any) {
        this.menuService.addMenu(event);
    }

  ngOnInit() {
  }

}
