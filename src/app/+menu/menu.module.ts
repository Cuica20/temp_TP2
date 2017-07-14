import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {menuRouting} from "./menu.routing";
import {MenuComponent} from "./menu.component";
import {MenuService} from "../menu.service";
import {MenuButtonComponent} from "./components/menu-button/menu-button.component";
import {MenuFormComponent} from "./components/menu-form/menu-form.component";
import {ToppingsSelectorComponent} from "./components/toppings-selector/toppings-selector.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MenuNameComponent} from "./components/menu-name/menu-name.component";
import {MenuListComponent} from "./components/menu-list/menu-list.component";
import {MenuSelectedComponent} from "./components/menu-selected/menu-selected.component";
import {JoinPipe} from "./pipes/join.pipe";

@NgModule({
  imports: [
    CommonModule,
    menuRouting,
    ReactiveFormsModule
  ],
  providers: [MenuService],
  declarations: [
      MenuComponent,
      MenuButtonComponent,
      MenuFormComponent,
      MenuNameComponent,
      ToppingsSelectorComponent,
      MenuSelectedComponent,
      JoinPipe,
      MenuListComponent],
  exports: [
      MenuComponent
  ]
})
export class MenuModule { }
