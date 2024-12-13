import { Component } from '@angular/core';
import { Apartment } from '../../../core/models/apartment';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ResidenceService } from '../../../services/residence.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  apartments: Apartment[] = []
  constructor(private apartmentService: ApartmentService,private residenceService:ResidenceService) {
    this.apartments = this.apartmentService.listApatments;
  }
  getResidence(idr: number) {
    return this.residenceService.listResidences.find((r) => r.id == idr)!.name;
  }
}
