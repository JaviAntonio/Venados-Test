import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstadisticasComponent,
    JugadoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
