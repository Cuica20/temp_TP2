/**
 * Created by javier on 6/11/17.
 */
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import {Menu, Topping} from "./interfaz/menu.interface";

export interface State {
    menus: Menu[],
    toppings: Topping[]
}

const state: State = {
    menus: [
        { name: '1/4 Pardos Brasa', toppings: ['Con papas doradas', 'Con ensalada de complemento'] },
        { name: '1/4 Pardos Parrillero BBQ', toppings: ['Con papas fritas', 'Guarnicion de ensalada'] },
        { name: 'Bife', toppings: ['Con papas fritas', 'Guarnicion de ensalada'] },
        { name: '1/4 Pardos Parrillero Original', toppings: ['Con papas fritas', 'Guarnicion de ensalada'] }
    ],
    toppings: [
        'Con ensalada de complemento', 'Con papas doradas', 'Con un palo de anticucho', 'Con rejillas de camote',
        'Guarnición de ensalada'
    ]
};

@Injectable()
export class MenuService {

    private subject = new BehaviorSubject<State>(state);
    store = this.subject.asObservable().distinctUntilChanged();

    select<T>(name: string): Observable<T> {
        return this.store.pluck(name);
    }

    addMenu(menu: Menu) {
        const value = this.subject.value;
        this.subject.next({ ...value, menus: [...value.menus, menu] });
    }

}
