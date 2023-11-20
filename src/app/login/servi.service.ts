import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiService {

  constructor(private _http: HttpClient) { }

  api_url: String ='http://localhost/prueba';

  loginservice(Username1:String, Password1:String): Observable <any>{
    //console.log("ingreso a servicio: "+ Username1 +" "+ Password1)
  
    return this._http.post(`${this.api_url}/datos.json`,{
    Username1: Username1,
    Password1: Password1

  })
  

 }
  

}
