import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-conf-dialog',
  templateUrl: './conf-dialog.component.html',
  styleUrls: ['./conf-dialog.component.css']
})
export class ConfDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfDialogComponent>) { 

   }

  ngOnInit(): void {
  }

  onEliminar(){
    this.dialogRef.close(true);
  }
  onCancelar(){
    this.dialogRef.close(false);
  }
}
