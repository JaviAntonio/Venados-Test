import { ServicesService } from '../services.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styles: []
})
export class EstadisticasComponent {
  title = 'venados-Test';
  stadistics: any[]=[];
 
  constructor(public json: ServicesService) {

    this.getstatistics();
   }

   getstatistics() {
    this.json.getJson('/statistics')
    .subscribe((response: any) => {
      console.log('response', response);
      this.stadistics= response.data.statistics;
     }, (error: any)  => {
      console.log('error', error);
    });
  }
}
