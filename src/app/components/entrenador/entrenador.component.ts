import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {

  title = 'venados-Test';
  team: any[] = [];
  name: String;
  first_surname: string;
  second_surname: string;
  birth_place: string;
  role: string;
  image: string;  
  ngOnInit() {    
  }  
    constructor(public json: ServicesService) {
      this.getteam();
     }
     getteam() {
      this.json.getJson('/players')
      .subscribe((response: any) => {
        console.log('response', response);
        this.team = response.data.team.coaches;
       }, (error: any)  => {
        console.log('error', error);
      });
    }
  
    getPlayer(item){
      this.name = item.name;
      this.first_surname = item.first_surname;
      this.second_surname = item.second_surname;
      this.birth_place = item.birth_place;
      this.role = item.role;
      this.image = item.image;
      console.log(item);
    }
  }
