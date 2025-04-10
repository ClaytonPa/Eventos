import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { EventoService } from '../evento.service';
import { Evento } from '../evento.models';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-indice-categorias',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatTableModule, CommonModule], 
  templateUrl: './indice-categorias.component.html',
  styleUrls: ['./indice-categorias.component.css']
})
export class IndiceCategoriasComponent {
  eventoService = inject(EventoService);
  eventos? : Evento[];
  columnsSet = ['Titulo', 'Descripcion', 'FechaInicio', 'FechaFin', 'TipoEvento', 'Acciones']
  constructor() { 
    this.cargarEventos();
    }
  cargarEventos(){
    this.eventoService.GetAll().subscribe(eventos => {
      console.log('Eventos recibidos:', eventos); 
      this.eventos = eventos;
    });
  }
  
  borrar(id: number) {
    this.eventoService.borrar(id).subscribe(() => {
      this.cargarEventos();
    });
  }
}
