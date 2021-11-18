import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Documento } from 'src/app/model/documento';
import { DocumentoService } from 'src/app/service/documento.service';

@Component({
  selector: 'app-doc-modal',
  templateUrl: './doc-modal.component.html',
  styleUrls: ['./doc-modal.component.css']
})
export class DocModalComponent implements OnInit {

  documento!: Documento;
  constructor(
    private dialogRef: MatDialogRef<DocModalComponent>,
    private documentoService: DocumentoService,
    @Inject(MAT_DIALOG_DATA) private data: Documento
  ) { }

  ngOnInit(): void {
    this.documento = new Documento();
    this.documento.id = this.data.id;
    this.documento.nombre = this.data.nombre;
    this.documento.codigo = this.data.codigo;
    this.documento.descripcion = this.data.descripcion;
    this.documento.estado = this.data.estado;
    

  }
  aceptar() {
    if (this.documento != null && this.documento.id > 0) {
      this.documentoService.editar(this.documento).subscribe(() => {
        return this.documentoService.listar().subscribe(data =>
          this.documentoService.documentoActualizar.next(data))
      })
    }else{
      this.documentoService.registrar(this.documento).subscribe(()=>{
        this.documentoService.listar().subscribe(data=>{
          this.documentoService.documentoActualizar.next(data);
        })
      })
    }
    this.cerrar();
  }
  cerrar() {
    this.dialogRef.close();
  }
}
