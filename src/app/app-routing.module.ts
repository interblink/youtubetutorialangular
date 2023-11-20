import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AtributosEventosNgmodelComponent } from './atributos-eventos-ngmodel/atributos-eventos-ngmodel.component';


const routes: Routes = [

{path: 'inicio', component: AtributosEventosNgmodelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
