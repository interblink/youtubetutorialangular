import { Component, OnInit } from '@angular/core';
import {ServiService} from './servi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _login:ServiService, private router: Router ){
 
}
  texto: String = "true";
ngOnInit(){}




login(){
  

  const Username1 = (document.querySelector("#Username") as HTMLInputElement).value
  const Password1 = (document.querySelector('#Password') as HTMLInputElement).value
  this._login.loginservice(Username1,Password1).subscribe(response => {
    //console.log("datos que llegan del API "+response.success);
    if(response.success == true){
            this.texto="false";
            this.router.navigateByUrl("/inicio");
            
    }
  });
  //console.log("ingreso a componente: "+ Username1 +" "+ Password1);
  

}

}
