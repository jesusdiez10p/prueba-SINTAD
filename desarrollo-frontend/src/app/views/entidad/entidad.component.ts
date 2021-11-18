import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Entidad } from 'src/app/model/entidad';
import { EntidadService } from 'src/app/service/entidad.service';
import { ConfDialogComponent } from './conf-dialog/conf-dialog.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.css']
})
export class EntidadComponent implements OnInit {

  displayedColumns = ['idEntidad', 'documento', 'nroDocumento', 'razonSocial', 'contribuyente', 'direccion', 'telefono', 'estado', 'acciones'];
  dataSource !: MatTableDataSource<Entidad>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private entidadService: EntidadService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.entidadService.entidadActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    this.entidadService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
  }
  openModal(entidad?: Entidad){
    let ent = entidad!=null? entidad : new Entidad();
    this.dialog.open(ModalComponent,{
      width: '260px',
      data: ent
    })
  }
  onDelete(id: number) {
    let dialogRef = this.dialog.open(ConfDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(estado => {
      if (estado) {
        this.entidadService.eliminar(id).subscribe(() => { 
          this.entidadService.listar().subscribe(data => { 
            this.dataSource = new MatTableDataSource(data) }) })
      }
    })
  }
  filtrar(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
