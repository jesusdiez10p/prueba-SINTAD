import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contribuyente } from 'src/app/model/contribuyente';
import { ContribuyenteService } from 'src/app/service/contribuyente.service';

@Component({
  selector: 'app-cont-modal',
  templateUrl: './cont-modal.component.html',
  styleUrls: ['./cont-modal.component.css']
})
export class ContModalComponent implements OnInit {

  contribuyente!: Contribuyente;
  constructor(
    private dialogRef: MatDialogRef<ContModalComponent>,
    private contribuyenteService: ContribuyenteService,
    @Inject(MAT_DIALOG_DATA) private data: Contribuyente
  ) { }

  ngOnInit(): void {
    this.contribuyente = new Contribuyente();
    this.contribuyente.id = this.data.id;
    this.contribuyente.nombre = this.data.nombre;
    this.contribuyente.codigo = this.data.codigo;
    this.contribuyente.estado = this.data.estado;
  }
  aceptar() {
    if (this.contribuyente != null && this.contribuyente.id > 0) {
      this.contribuyenteService.editar(this.contribuyente).subscribe(() => {
        return this.contribuyenteService.listar().subscribe(data =>
          this.contribuyenteService.contribuyenteActualizar.next(data))
      })
    }else{
      this.contribuyenteService.registrar(this.contribuyente).subscribe(()=>{
        this.contribuyenteService.listar().subscribe(data=>{
          this.contribuyenteService.contribuyenteActualizar.next(data);
        })
      })
    }
    this.cerrar();
  }
  cerrar() {
    this.dialogRef.close();
  }
}
