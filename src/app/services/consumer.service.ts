import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';
import { Residence } from '../core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  baseUrl : string = 'http://localhost:3000/residence'
  constructor(private http: HttpClient) { }
  
  fetch() {
    return this.http.get<Residence[]>(this.baseUrl);
  }

  add(body:Residence) {
    return this.http.post(this.baseUrl, body);
  }

  update(body:Residence,id:number) {
    return this.http.put(this.baseUrl + '/' + id, body);
  }

  remove(id:number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
