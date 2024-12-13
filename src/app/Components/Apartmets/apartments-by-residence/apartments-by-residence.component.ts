import { Component } from '@angular/core';
import { Apartment } from 'src/app/core/models/apartment';
import { ApartmentService } from '../../../services/apartment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent {

  apartments: Apartment[] = [];

  constructor(private apartmentService: ApartmentService,private activated:ActivatedRoute) {
    this.apartments = this.apartmentService.listApatments.filter((a)=>a.ResidenceId == this.activated.snapshot.params['id'])
  }
}
