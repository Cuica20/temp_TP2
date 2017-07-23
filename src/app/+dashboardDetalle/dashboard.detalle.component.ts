import {Component, OnInit} from "@angular/core";
import {PedidoDetalle} from "../dto/PedidoDetalle";
import {AppService} from "../service/app.service";
import {Message} from "primeng/primeng";
import {DeliveryResult} from "../dto/DeliveryResult";
/**
 * Created by javier on 7/23/17.
 */

declare var google: any;

@Component({
    selector: 'app-dashboard-detalle',
    templateUrl: './dashboard.detalle.component.html',
    styleUrls: ['./dashboard.detalle.component.scss']
})
export class DashboardDetalle implements OnInit{

    options: any;

    overlays: any[];

    dialogVisible: boolean;

    markerTitle: string;

    selectedPosition: any;

    infoWindow: any;

    draggable: boolean;
    isDelivery: boolean;

    msgs: Message[] = [];

    deliveryResult: DeliveryResult = new DeliveryResult();

    public pedidoDetalleResult: PedidoDetalle[] = [];

    constructor(private appService: AppService){}

    ngOnInit(): void {
        let pedidoObject = JSON.parse(sessionStorage.getItem('idDetallePedido'));

        if(pedidoObject !=null){
            this.obtenerPedidoDetalleById(pedidoObject.id_pedido);
        }

        this.isDelivery = JSON.parse(sessionStorage.getItem('isDelivery'));

        this.deliveryResult = JSON.parse(sessionStorage.getItem('idDetalleGoodleMap'));
        if(this.deliveryResult.latitude !=null){
            debugger;
            var x1 = Number(this.deliveryResult.latitude);
            var y2 = Number(this.deliveryResult.longitud);
            this.options = {
                center: {lat: x1, lng: y2},
                zoom: 17
            };

            this.initOverlays();

            this.infoWindow = new google.maps.InfoWindow();
        }


    }

    private obtenerPedidoDetalleById(code: any){
        this.appService.obtenerPedidoDetalleById(code).subscribe(
            (data: PedidoDetalle[]) => {
                this.pedidoDetalleResult = data;
            },
            error => {
                /*this.msgs.push({severity:'error', summary:'Error Message', detail:error.error});*/
            }
        );
    }

    //---------------------
    handleMapClick(event) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    }

    handleOverlayClick(event) {
        this.msgs = [];
        let isMarker = event.overlay.getTitle != undefined;

        if(isMarker) {
            let title = event.overlay.getTitle();
            this.infoWindow.setContent('' + title + '');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            this.msgs.push({severity:'info', summary:'Marcador seleccionado', detail: title});
        }
        else {
            this.msgs.push({severity:'info', summary:'Forma seleccionada', detail: ''});
        }
    }

    addMarker() {
        this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable}));
        this.markerTitle = null;
        this.dialogVisible = false;
    }

    handleDragEnd(event) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Marcador arrastrado', detail: event.overlay.getTitle()});
    }

    initOverlays() {
        if(!this.overlays||!this.overlays.length) {
            var x1 = Number(this.deliveryResult.latitude);
            var y2 = Number(this.deliveryResult.longitud);

            this.overlays = [
                new google.maps.Marker({position: {lat: x1, lng: y2}, title:"Lima1"}),
                /*new google.maps.Polygon({paths: [
                    {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
                ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
                }),*/
                new google.maps.Circle({center: {lat: x1, lng: y2}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
                new google.maps.Polyline({path: [{lat: x1, lng: y2},{lat: x1, lng: y2}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
            ];
        }
    }

    zoomIn(map) {
        map.setZoom(map.getZoom()+1);
    }

    zoomOut(map) {
        map.setZoom(map.getZoom()-1);
    }

    clear() {
        this.overlays = [];
    }

}