import { Injectable } from '@angular/core';
import { Apartment } from '../core/models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  listApatments : Apartment [] = []
  constructor() { }

  addAparment(apartment:Apartment) {
    this.listApatments.push(apartment);
  }
}
