import {Directive, ElementRef, Input, OnInit, ViewContainerRef} from "@angular/core";
/**
 * Created by javier on 7/19/17.
 */
@Directive({
    selector: '[tooltip]',
    exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit{

    tooltipElement = document.createElement('div');
    visible = false;

    @Input()
    set tooltip(value){
        this.tooltipElement.textContent = value;
    }

    hide(){
        this.tooltipElement.classList.remove('tooltip--active');
    }

    show(){
        this.tooltipElement.classList.add('tooltip--active');
    }

    constructor(private element: ElementRef){

    }

    ngOnInit(): void {
        this.tooltipElement.className = 'tooltip';
        this.element.nativeElement.appendChild(this.tooltipElement);
        this.element.nativeElement.classList.add('tooltip-container');
    }

}