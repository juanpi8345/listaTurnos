import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { VerTurnosComponent } from './components/ver-turnos/ver-turnos.component';
import { EditarTurnoComponent } from './components/editar-turno/editar-turno.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'ver-turnos', component: VerTurnosComponent},
  {path: 'editar-turno/:id', component: EditarTurnoComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
