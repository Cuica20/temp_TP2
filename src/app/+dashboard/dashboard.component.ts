import {Input, OnChanges, SimpleChange} from "@angular/core";
/**
 * Created by javier on 7/19/17.
 */
export class Dashboard implements OnChanges{

    private showPlayer: boolean = false;
    @Input() fileToPlay:string;

    ngOnInit(){
        if (this.fileToPlay != '') {
            this.showPlayer = true;
        }

        /*var audio = new Audio();
        audio.src = "http://remote.address.com/example.mp3";
        audio.load();
        audio.play();*/
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}){

        if(changes['fileToPlay'].previousValue !== changes['fileToPlay'].currentValue && changes['fileToPlay'].currentValue !== '') {
            this.showPlayer = false;
            setTimeout(() => this.showPlayer = true, 0);
        }
    }
}