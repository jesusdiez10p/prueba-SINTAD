import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Documento } from '../model/documento';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  documentoActualizar = new Subject<Documento[]>();
  private url : string ='http://localhost:8080/api/documentos'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Documento[]>(this.url)
  }

  eliminar(id :number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(documento: Documento){
    return this.http.put(this.url,documento);
  }
  registrar(documento: Documento){
    return this.http.post(this.url,documento);
  }
}
