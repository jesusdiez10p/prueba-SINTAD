import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contribuyente } from 'src/app/model/contribuyente';
import { ContribuyenteService } from 'src/app/service/contribuyente.service';
import { ConfDialogComponent } from '../entidad/conf-dialog/conf-dialog.component';
import { ContModalComponent } from './cont-modal/cont-modal.component';

@Component({
  selector: 'app-contribuyentes',
  templateUrl: './contribuyentes.component.html',
  styleUrls: ['./contribuyentes.component.css']
})
export class ContribuyentesComponent implements OnInit {
  displayedColumns = ['idDocumento','nombre','codigo','estado','acciones'];
  dataSource !: MatTableDataSource<Contribuyente>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private contribuyenteService: ContribuyenteService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.contribuyenteService.contribuyenteActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.contribuyenteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
  }
  openModal(contribuyente?: Contribuyente){
    let ent = contribuyente!=null? contribuyente : new Contribuyente();
    this.dialog.open(ContModalComponent,{
      width: '260px',
      data: ent
    })
  }
  onDelete(id: number) {
    let dialogRef = this.dialog.open(ConfDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(estado => {
      if (estado) {
        this.contribuyenteService.eliminar(id).subscribe(() => { 
          this.contribuyenteService.listar().subscribe(data => { 
            this.dataSource = new MatTableDataSource(data) }) })
      }
    })
  }
  filtrar(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
