import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { CitaComponent } from './cita/cita.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ConsejosComponent } from './consejos/consejos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'cita', component: CitaComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'evaluacion', component: EvaluacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'consejos', component: ConsejosComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
