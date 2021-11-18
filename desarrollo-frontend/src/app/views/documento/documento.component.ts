import { Component, OnInit, ViewChild } from '@angular/core';
import { Documento } from 'src/app/model/documento';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentoService } from 'src/app/service/documento.service';
import { DocModalComponent } from './doc-modal/doc-modal.component';
import { ConfDialogComponent } from '../entidad/conf-dialog/conf-dialog.component';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  displayedColumns = ['idDocumento','nombre','codigo','descripcion','estado','acciones'];
  dataSource !: MatTableDataSource<Documento>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private documentoService: DocumentoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.documentoService.documentoActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.documentoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
  }

  openModal(documento?: Documento){
    let ent = documento!=null? documento : new Documento();
    this.dialog.open(DocModalComponent,{
      width: '260px',
      data: ent
    })
  }
  onDelete(id: number) {
    let dialogRef = this.dialog.open(ConfDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(estado => {
      if (estado) {
        this.documentoService.eliminar(id).subscribe(() => { 
          this.documentoService.listar().subscribe(data => { 
            this.dataSource = new MatTableDataSource(data) }) })
      }
    })
  }
  filtrar(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
