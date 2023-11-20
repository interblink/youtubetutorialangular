import { Component } from '@angular/core';
import { Usuario, Usertipo } from './interfaces'; 

@Component({
  selector: 'app-interface-enumeracionesycasting',
  templateUrl: './interface-enumeracionesycasting.component.html',
  styleUrls: ['./interface-enumeracionesycasting.component.css']
})
export class InterfaceEnumeracionesycastingComponent {

constructor(){
  this.name();
}

onInit(){}

//interfaces solo para 1 usuario

/*user:Usuario={
  ID: 1094240083,
  Nombre: "Johann",
  Apellido: "Latorre",
  Nick: "interblink",
  Email: "Johann5086",
  Contrasena: "RT1123",
  Tipo_user: Usertipo.Administrador //viene del archivo interface.ts
}*/

//interface si son mas de dos usuarios con su rol toca con array de usuarios
/*
user1:Usuario[]=[
{
  ID: 1094240083,
  Nombre: "Johann",
  Apellido: "Latorre",
  Nick: "interblink",
  Email: "Johann5086",
  Contrasena: "RT1123",
  Tipo_user: Usertipo.Administrador //viene del archivo interface.ts
}
,
{
  ID: 63360953,
  Nombre: "Claudia",
  Apellido: "Diaz",
  Nick: "Clau",
  Email: "claudia23",
  Contrasena: "RT567",
  Tipo_user: Usertipo.Cliente //viene del archivo interface.ts
}
]
*/

//casting me permite transformar un dato de tipo obj a otro tipo de dato por ejemplo interface

user2:Usuario=<Usuario>{ //<Usuario> convertido a interface para usar en una funcion
  ID: 63360953,
  Nombre: "Claudia",
  Apellido: "Diaz",
  Nick: "Clau",
  Email: "claudia23",
  Contrasena: "RT567",
  Tipo_user: Usertipo.Cliente //viene del archivo interface.ts

}

name():void {
console.log(this.user2.Apellido);
  
}

}
