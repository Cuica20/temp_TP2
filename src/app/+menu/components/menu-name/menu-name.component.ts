import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'menu-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['menu-name.component.scss'],
  template: `
    <div class="menu-name" [formGroup]="parent">
      <input 
        type="text" 
        placeholder="Lista de platos" 
        formControlName="name">
      <div 
        class="error"
        *ngIf="invalid">
        Es necesario elegir un plato
      </div>
    </div>
  `
})
export class MenuNameComponent {

  @Input()
  parent: FormGroup;

  get invalid() {
    return (
      this.parent.get('name').hasError('required') &&
      this.parent.get('name').touched
    );
  }

}
