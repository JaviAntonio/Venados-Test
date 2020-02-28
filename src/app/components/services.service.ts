import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


const headers = new HttpHeaders({
  accept: 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http: HttpClient) { }
  env = environment.API_URL;

  getJson(url: string ) {
    return this.http.get(this.env + url, { headers: headers });
}
}

