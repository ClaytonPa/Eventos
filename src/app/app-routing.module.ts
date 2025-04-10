import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IndiceCategoriasComponent } from './indice-categorias/indice-categorias.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
export const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'categorias', component: IndiceCategoriasComponent},
  {path: 'categorias/crear', component: CrearEventoComponent},
  {path: 'categorias/editar/:id', component: EditarCategoriaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
