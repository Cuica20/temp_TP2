import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'menu-button',
  styleUrls: ['menu-button.component.scss'],
  template: `
    <div class="menu-button" [formGroup]="parent">
      <button 
        type="button"
        (click)="onClick()"
        [disabled]="parent.invalid">
        <img src="assets/add.svg">
        <ng-content></ng-content>
      </button>
    </div>
  `
})
export class MenuButtonComponent {

  @Input()
  parent: FormGroup;

  @Output()
  add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }

}