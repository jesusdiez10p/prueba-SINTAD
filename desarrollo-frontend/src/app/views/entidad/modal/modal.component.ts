import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contribuyente } from 'src/app/model/contribuyente';
import { Documento } from 'src/app/model/documento';
import { Entidad } from 'src/app/model/entidad';
import { ContribuyenteService } from 'src/app/service/contribuyente.service';
import { DocumentoService } from 'src/app/service/documento.service';
import { EntidadService } from 'src/app/service/entidad.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  entidad!: Entidad;
  contribuyente!: Contribuyente[];
  documento!: Documento[];

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private documentoService: DocumentoService,
    private contribuyenteService: ContribuyenteService,
    private entidadService: EntidadService,
    @Inject(MAT_DIALOG_DATA) private data: Entidad
  ) { }

  ngOnInit(): void {
    this.entidad = new Entidad();
    this.entidad.id = this.data.id;
    this.entidad.documento = this.data.documento;
    this.entidad.nroDocumento = this.data.nroDocumento;
    this.entidad.razonSocial = this.data.razonSocial;
    this.entidad.nombreComercial = this.data.nombreComercial;
    this.entidad.contribuyente = this.data.contribuyente;
    this.entidad.direccion = this.data.direccion;
    this.entidad.telefono = this.data.telefono;
    this.entidad.estado = this.data.estado;

    this.contribuyenteService.listar().subscribe(data => {
      this.contribuyente = data
    })
    this.documentoService.listar().subscribe(data => {
      this.documento = data
    })

  }
  aceptar() {
    if (this.entidad != null && this.entidad.id > 0) {
      this.entidadService.editar(this.entidad).subscribe(() => {
        return this.entidadService.listar().subscribe(data =>
          this.entidadService.entidadActualizar.next(data))
      })
    }else{
      this.entidadService.registrar(this.entidad).subscribe(()=>{
        this.entidadService.listar().subscribe(data=>{
          this.entidadService.entidadActualizar.next(data);
        })
      })
    }
    this.cerrar();
  }
  cerrar() {
    this.dialogRef.close();
  }




}
