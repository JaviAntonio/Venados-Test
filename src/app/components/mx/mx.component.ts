import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-mx',
  templateUrl: './mx.component.html',
  styleUrls: ['./mx.component.css']
})
export class MxComponent implements OnInit {

  ngOnInit() {
  }
  title = 'venados-Test';
  games: any[]=[];
  constructor(public json: ServicesService) {
    this.getGames();
   }
   getGames() {
    this.json.getJson('/games')
    .subscribe((response: any) => {
      console.log('response', response);
      this.games [0] = response.data.games;
    }, (error: any)  => {
      console.log('errorinternet', error);
    });
  }

}


