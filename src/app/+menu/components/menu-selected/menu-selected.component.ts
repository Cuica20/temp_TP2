import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Topping} from "../../../interfaz/menu.interface";

@Component({
  selector: 'menu-selected',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['menu-selected.component.scss'],
  template: `
    <div class="menu-selected" [formGroup]="parent">
      <div class="menu-selected__empty" *ngIf="!selected.length">
        Seleccione el menu
      </div>
      <div
        class="menu-selected__list" 
        *ngIf="selected.length"
        formArrayName="toppings">
        <div 
          class="menu-selected__item" 
          *ngFor="let topping of selected; index as i;">
          <div [formGroupName]="i">
            <img src="assets/check.svg">
            {{ topping }}
            <button 
              type="button"
              (click)="onRemove(i)">
              <img src="assets/cross.svg">
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MenuSelectedComponent {

  @Input()
  parent: FormGroup;

  @Input()
  selected: Topping[];

  @Output()
  remove = new EventEmitter<number>();

  onRemove(index: number) {
    this.remove.emit(index);
  }

}
