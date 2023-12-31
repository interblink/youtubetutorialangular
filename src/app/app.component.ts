

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyecto_curso';

//usuarios = [];
usuarios: Usuario[] = [];


constructor(private _http: HttpClient){}

ngOnInit(): void {
    this._http.get<Usuario>('https://jsonplaceholder.typicode.com/users').subscribe((datos:any)=> this.usuarios = datos)
}

BorrarUsuario(id:number){
  this.usuarios = this.usuarios.filter(usuario => usuario.id != id);
}

}
