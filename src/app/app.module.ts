import { NgModule } from '@angular/core';
import { ApplicationConfig, BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LandingComponent } from './landing/landing.component';
import { IndiceCategoriasComponent } from './indice-categorias/indice-categorias.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { FormularioEventoComponent } from './formulario-evento/formulario-evento.component';

@NgModule({
  declarations: [
    
    
    
    
    
  
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppComponent,
    IndiceCategoriasComponent,
    CrearEventoComponent,
    LandingComponent,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditarCategoriaComponent,
    FormularioEventoComponent,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
