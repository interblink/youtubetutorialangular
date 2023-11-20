import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CondicionesyplantillasComponent } from './condicionesyplantillas/condicionesyplantillas.component';
import { InterfaceEnumeracionesycastingComponent } from './interface-enumeracionesycasting/interface-enumeracionesycasting.component';
import { AtributosEventosNgmodelComponent } from './atributos-eventos-ngmodel/atributos-eventos-ngmodel.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';



@NgModule({
  /*aqui van los componentes - here are the components*/
  declarations: [
    AppComponent,
    HeaderComponent,
    CondicionesyplantillasComponent,
    InterfaceEnumeracionesycastingComponent,
    AtributosEventosNgmodelComponent,
    LoginComponent,
    UserComponent


  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  /* aqui van los servicios - here are the services*/  
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
