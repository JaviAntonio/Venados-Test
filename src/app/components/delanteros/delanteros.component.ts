import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-delanteros',
  templateUrl: './delanteros.component.html',
  styleUrls: ['./delanteros.component.css']
})
export class delanterosComponent implements OnInit {

  title = 'venados-Test';
  team: any[] = [];
  name: String;
  first_surname: string;
  second_surname: string;
  birth_place: string;
  weight: string;
  height: string;
  position: string;
  number: string;
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
        this.team = response.data.team.forwards;
       }, (error: any)  => {
        console.log('error', error);
      });
    }
  
    getPlayer(item){
      this.name = item.name;
      this.first_surname = item.first_surname;
      this.second_surname = item.second_surname;
      this.birth_place = item.birth_place;
      this.weight = item.weight;
      this.height = item.height;
      this.position = item.position;
      this.number = item.number;
      this.image = item.image;
      console.log(item);
    }
  }
