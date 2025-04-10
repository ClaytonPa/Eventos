import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Evento, EventoIns } from './evento.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/eventos';

  public GetAll(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.URLbase);
  }

  public GetById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.URLbase}/${id}`);
  }

  public crear(evento: EventoIns) {
    return this.http.post(this.URLbase, evento);
  }

  public actualizar(id: number, evento: EventoIns) {
    return this.http.put(`${this.URLbase}/${id}`, evento);
  }

  public borrar (id: number) {
    return this.http.delete(`${this.URLbase}/${id}`);
  }

}
