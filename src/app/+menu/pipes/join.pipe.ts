/**
 * Created by javier on 6/12/17.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'join'
})
export class JoinPipe implements PipeTransform {
    transform(value: any) {
        return Array.isArray(value) ? value.join(', ') : value;
    }
}