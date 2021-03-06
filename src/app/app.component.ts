
import { Component, OnInit } from '@angular/core';
import { ServicesService } from './components/services.service';
import * as $ from 'jquery';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'venados-Test';
  public ngOnInit(){

  }

  constructor(public json: ServicesService) {


    this.getGames();
   }

   getGames() {
    this.json.getJson('/games')
    .subscribe((response: any) => {
      console.log('response', response);
     }, (error: any)  => {
      console.log('error', error);
    });
  }
}
export class JugadoresComponent {
  title = 'venados-Test';

  constructor(public json: ServicesService) {

    this.getPlayers();
   }

   getPlayers() {
    this.json.getJson('/players')
    .subscribe((response: any) => {
      console.log('response', response);
     }, (error: any)  => {
      console.log('error', error);
    });
  }
}


