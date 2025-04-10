import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../evento.service';
import { Evento, EventoIns } from '../evento.models';
import { FormularioEventoComponent } from '../formulario-evento/formulario-evento.component';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-editar-categoria',
  standalone: true,
  imports: [FormularioEventoComponent, LandingComponent],
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  eventoService = inject(EventoService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  modelo?: Evento;
  id!: number;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.id = +idParam;
      this.eventoService.GetById(this.id).subscribe(evento => {
        this.modelo = evento;
      });
    } else {
      console.error('No se encontró el ID en la URL.');
    }
  }

  guardarCambios(evento: EventoIns) {
    this.eventoService.actualizar(this.id, evento).subscribe(() => {
      this.router.navigate(['/categorias']);
    });
  }
}
