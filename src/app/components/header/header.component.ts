import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
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
      this.games= response.data.games;
    }, (error: any)  => {
      console.log('errorinternet', error);
    });
  }

}
