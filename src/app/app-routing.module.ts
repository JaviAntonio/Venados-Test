import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';


const routes: Routes = [
  {path: 'Estadisticas', component: EstadisticasComponent},
  {path: 'jugadores', component: JugadoresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
