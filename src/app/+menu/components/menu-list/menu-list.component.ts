import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {Menu} from "../../../interfaz/menu.interface";


@Component({
    selector: 'menu-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['menu-list.component.scss'],
    template: `
        <div class="menu-list">
            <h2>Lista</h2>
            <div *ngFor="let menu of menus">
                <p>{{ menu.name }}</p>
                <span>{{ menu.toppings | join }}</span>
            </div>
        </div>
    `
})
export class MenuListComponent {

    @Input()
    menus: Menu[];

}
