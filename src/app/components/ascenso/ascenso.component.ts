import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-ascenso',
  templateUrl: './ascenso.component.html',
  styleUrls: ['./ascenso.component.css']
})
export class AscensoComponent implements OnInit {

  ngOnInit() {
  }

  games:any []=[];

  constructor(public json: ServicesService) {
    this.getGames();
   }
   getGames() {
    this.json.getJson('/games')
    .subscribe((response: any) => {
      console.log('response', response);
      this.games[0] = response.data.games;
    }, (error: any)  => {
      console.log('errorinternet', error);
    });
  }
}
