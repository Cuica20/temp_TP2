import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {ReservaResult} from "../dto/reservaResult";
import {Observable} from "rxjs/Observable";
import {ReservaFilter} from "../dto/ReservaFilter";
import {environment} from "../../environments/environment";
/**
 * Created by javier on 7/16/17.
 */


@Injectable()
export class AppService {

    localhost:  String = environment.backend;
    port: String = environment.port;

    private GET_RESERVA_CONSULTA = '/api/centroCosto/buscarCentrosCostos';

    //private domainserver:string = 'http://10.241.16.14:3000';
    private domainserver:string = 'http://localhost:8080';

    constructor(private http: Http) {};

    public getReservaByCode(code:string){

        return this.http.get('http://'+this.localhost+':'+ this.port +'/centroCosto/obtenerCentrosCosto')
            .map(res => <ReservaResult> res.json())
            .catch(this.handleError);
    }

    getReservaConsulta(filter: ReservaFilter) {
        let url = 'http://'+this.localhost+':'+ this.port +'/reserva/buscarReserva';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(filter), {headers: header})
            .map(res => <ReservaResult[]> res.json())
            .catch(this.handleError);
    }

    anularReserva(dataItem: any){
        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/busquedaEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(dataItem), {headers: header})
            .map(res => <ReservaResult[]> res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<string> {
        return Observable.throw(error.json() || 'Server error');
    }
}
