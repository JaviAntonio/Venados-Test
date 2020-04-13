import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent {
  title = 'venados-Test';
  games: any[]=[];
  constructor(public json: ServicesService) {
    this.getGames();
   }
   getGames() {
    this.json.getJson('/games')
    .subscribe((response: any) => {
      console.log('response', response);
      this.games= response.data.games;
    }, (error: any)  => {
      console.log('errorinternet', error);
    });
  }

}
