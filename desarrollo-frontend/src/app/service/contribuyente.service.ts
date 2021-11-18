import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contribuyente } from '../model/contribuyente';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContribuyenteService {

  contribuyenteActualizar = new Subject<Contribuyente[]>();
  private url : string ='http://localhost:8080/api/contribuyentes'
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Contribuyente[]>(this.url)
  }
  eliminar(id :number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(contribuyente: Contribuyente){
    return this.http.put(this.url,contribuyente);
  }
  registrar(contribuyente: Contribuyente){
    return this.http.post(this.url,contribuyente);
  }
}
