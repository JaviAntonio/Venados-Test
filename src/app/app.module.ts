import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { ServicesService } from './components/services.service';
import { CommonModule } from '@angular/common';
import { PorterosComponent } from './components/porteros/porteros.component';
import { delanterosComponent } from './components/delanteros/delanteros.component';
import { DefensasComponent } from './components/defensas/defensas.component';
import { EntrenadorComponent } from './components/entrenador/entrenador.component';
import { MxComponent } from './components/mx/mx.component';
import { AscensoComponent } from './components/ascenso/ascenso.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstadisticasComponent,
    JugadoresComponent,
    PartidosComponent,
    PorterosComponent,
    delanterosComponent,
    DefensasComponent,
    EntrenadorComponent,
    MxComponent,
    AscensoComponent, ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class Ratesmodules { }
