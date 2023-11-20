import { Component, OnInit } from '@angular/core';

@Component({ //@ es un decorador
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent implements OnInit{

constructor(){
  console.log("Component 2") //he component execute first - se ejecuta primero que todo
}

ngOnInit(): void {
  console.log("Component create") //after the component was created osea he component execute second - se executa de segundo
}

name = "johann";

 function_change() {
  this.name = "Paola";
  
}
 contador = 0;
sum(){
 this.contador = this.contador + 1;
}

arr = [1,2,3,4,5,6,7,8,9,10]

add(){
  this.arr.push(Math.random());
}


}
