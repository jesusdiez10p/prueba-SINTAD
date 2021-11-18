import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Entidad } from '../model/entidad';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  entidadActualizar = new Subject<Entidad[]>();

  private url : string ='http://localhost:8080/api/entidades'
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Entidad[]>(this.url)
  }

  eliminar(id :number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(entidad: Entidad){
    return this.http.put(this.url,entidad);
  }
  registrar(entidad: Entidad){
    return this.http.post(this.url,entidad);
  }
}
