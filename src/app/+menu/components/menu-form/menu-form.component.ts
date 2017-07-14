import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import {Topping} from "../../../interfaz/menu.interface";
import {ToppingsValidator} from "../../toppings.validator";


@Component({
  selector: 'menu-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['menu-form.component.scss'],
  template: `
    <form [formGroup]="form">

      <toppings-selector
        [parent]="form"
        [toppings]="toppings"
        [selected]="control.value"
        (select)="selectTopping($event)">
      </toppings-selector>

      <menu-name 
        [parent]="form">
      </menu-name>

      <menu-selected
        [parent]="form"
        [selected]="control.value"
        (remove)="removeTopping($event)">
      </menu-selected>

      <menu-button
        [parent]="form"
        (add)="onSubmit()">
        Agregar Pedido
      </menu-button>

    </form>
  `
})
export class MenuFormComponent {

  @Input()
  toppings: Topping[];

  @Output()
  add = new EventEmitter<FormGroup>();

  form = this.fb.group({
    name: ['', Validators.required],
    toppings: this.fb.array([])
  }, {
    validator: ToppingsValidator
  });

  constructor(
    private fb: FormBuilder
  ) {}

  get control() {
    return this.form.get('toppings') as FormArray;
  }

  addTopping(topping: Topping) {
    this.control.push(new FormControl(topping));
  }

  removeTopping(index: number) {
    this.control.removeAt(index);
  }

  selectTopping(topping: Topping) {
    const index = this.control.value.indexOf(topping);
    if (!!~index) {
      this.removeTopping(index);
    } else {
      this.addTopping(topping);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.add.emit(this.form.value);
  }

}
