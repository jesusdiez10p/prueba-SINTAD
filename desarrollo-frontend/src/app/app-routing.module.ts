import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadComponent } from './views/entidad/entidad.component';
import { DocumentoComponent } from './views/documento/documento.component';
import { ContribuyentesComponent } from './views/contribuyentes/contribuyentes.component';
import { UserGuardGuard } from './guard/user-guard.guard';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/login/registro/registro.component';


const routes: Routes = [
  {
    path: '',
    //canActivate:[UserGuardGuard],
    component: LoginComponent
  },
  {
    path: 'registro',
    //canActivate:[UserGuardGuard],
    component: RegistroComponent
  },
  {
    path: 'entidad',
    //canActivate:[UserGuardGuard],
    component: EntidadComponent
  },
  {
    path: 'documento',
    //canActivate:[UserGuardGuard],
    component: DocumentoComponent
  },
  {
    path: 'contribuyente',
    //canActivate:[UserGuardGuard],
    component: ContribuyentesComponent
  },{
    path:'**', redirectTo:'',pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes/*,{enableTracing: true}*/)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
