import { ServicesService } from '../services.service';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit{
title = 'venados-Test';
team: any[] = [];
delan: any[] = [];
def: any[] = [];
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
      this.team = response.data.team.centers;
      this.delan = response.data.team.forwards;
      this.def = response.data.team.defenses;
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

