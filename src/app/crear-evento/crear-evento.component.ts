import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { EventoService } from '../evento.service';
import { EventoIns } from '../evento.models';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormularioEventoComponent } from '../formulario-evento/formulario-evento.component';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [FormularioEventoComponent],
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent {
  eventoService = inject(EventoService);
  router = inject(Router);
  guardarCambios(evento: EventoIns) {
    this.eventoService.crear(evento).subscribe(() => {
      this.router.navigate(['categorias']);
    });
  }
}
