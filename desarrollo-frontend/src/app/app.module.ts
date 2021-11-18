import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntidadComponent } from './views/entidad/entidad.component';
import { DocumentoComponent } from './views/documento/documento.component';
import { ContribuyentesComponent } from './views/contribuyentes/contribuyentes.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ConfDialogComponent } from './views/entidad/conf-dialog/conf-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './views/entidad/modal/modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import {MatPaginatorModule} from '@angular/material/paginator';
import { interceptorProvider, JwtInterceptorInterceptor } from './interceptor/jwt-interceptor.interceptor';
import { DocModalComponent } from './views/documento/doc-modal/doc-modal.component';
import { ContModalComponent } from './views/contribuyentes/cont-modal/cont-modal.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/login/registro/registro.component';
import { MenuComponent } from './views/menu/menu.component';
import { Prueba1Component } from './views/prueba1/prueba1.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    EntidadComponent,
    DocumentoComponent,
    ContribuyentesComponent,
    ConfDialogComponent,
    ModalComponent,
    DocModalComponent,
    ContModalComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    Prueba1Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
