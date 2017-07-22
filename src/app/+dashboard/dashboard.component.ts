import {Component, Input, OnChanges, OnInit, SimpleChange} from "@angular/core";
import {AppService} from "../service/app.service";
import {ReservaResult} from "../dto/reservaResult";
/**
 * Created by javier on 7/19/17.
 */

@Component({
    selector: 'app-dashbaord',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [AppService]
})
export class Dashboard implements OnInit, OnChanges{

    private showPlayer: boolean = false;
    @Input() fileToPlay:string;

    public reservaResult: ReservaResult[] = [];

    constructor(){}

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