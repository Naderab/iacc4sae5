import { Component } from '@angular/core';
import { Residence } from '../../core/models/residence';
import { ResidenceService } from '../../services/residence.service';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  x: Residence = new Residence();
  show: boolean = false;
  listFavoris:Residence[]=[]
  listResidences: Residence[] = [];

  constructor(private residenceService: ResidenceService,private consumer:ConsumerService) {
    //this.listResidences = residenceService.listResidences;
    this.consumer.fetch().subscribe({
      next: (response) => this.listResidences = response,
      error : (e)=>console.log(e)
    });
  }

  selectResidence(r: Residence) {
    if (r.address == 'inconnu') {
      alert('address inconnu');
    }
    else {
      this.show = true;
      this.x = r;
    }
  }

  addToFavoris(r: Residence) {
    //let residence = this.listFavoris.find((e) => e.id == r.id);
    //console.log(residence)
    if (this.isFavoris(r) == -1) {
      this.listFavoris.push(r);
    } else {
      //let index = this.listFavoris.findIndex((e) => e.id == r.id);
      this.listFavoris.splice(this.isFavoris(r),1)
    }
  }

  isFavoris(r: Residence) {
    return this.listFavoris.findIndex((e) => e.id == r.id);
  }

  searchText: string = ''
  
  filterResidence() {
    return this.listResidences.filter(
      (e) => e.address.toLowerCase()
        .includes(this.searchText.toLowerCase())
    )
  }
}
