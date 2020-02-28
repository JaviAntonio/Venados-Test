import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { PorterosComponent } from './components/porteros/porteros.component';
import { delanterosComponent } from './components/delanteros/delanteros.component';
import { DefensasComponent } from './components/defensas/defensas.component';
import { EntrenadorComponent } from './components/entrenador/entrenador.component';
import { MxComponent } from './components/mx/mx.component';
import { AscensoComponent } from './components/ascenso/ascenso.component';
import { HeaderComponent } from './components/header/header.component';






const routes: Routes = [
  {path: 'Estadisticas', component: EstadisticasComponent},
  {path: 'jugadores', component: JugadoresComponent},
  {path: 'partidos', component: PartidosComponent},
  {path: 'porteros', component: PorterosComponent},
  {path: 'delanteros', component: delanterosComponent},
  {path: 'Defensas', component: DefensasComponent},
  {path: 'Entrenador', component: EntrenadorComponent},
  {path: 'Mx', component: MxComponent},
  {path: 'Ascenso', component: AscensoComponent},
  {path: 'Header', component: HeaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
