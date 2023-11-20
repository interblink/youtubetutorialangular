import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionesyplantillas',
  templateUrl: './condicionesyplantillas.component.html',
  styleUrls: ['./condicionesyplantillas.component.css']
})
export class CondicionesyplantillasComponent {

constructor(){}

//para hacer el logue de prueba con container y template
isLogged: boolean = false;

//creamos un nivel con 10. para decirle que solo las personas que tienen nivel 10 pueden acceder a x cosa
nivel: number = 9;
//nivel = 9;
}
