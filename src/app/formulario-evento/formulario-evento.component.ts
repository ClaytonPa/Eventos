import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Evento, EventoIns } from '../evento.models';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-formulario-evento',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.css']
})
export class FormularioEventoComponent implements OnInit{

  private readonly formBuilder = inject(FormBuilder);
  @Input()
  titulo!: string;

  @Input()
  modelo?: Evento;

  @Output()
  posteoFormulario = new EventEmitter<EventoIns>();

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
  form = this.formBuilder.group({
    Titulo: [''],
    Descripcion: [''],
    FechaInicio: [new Date()],
    FechaFin: [new Date()],
    TipoEvento: [0],
  })

    guardarCambios(){
      let evento = this.form.value as EventoIns;
      this.posteoFormulario.emit(evento);

      }


    }
  

