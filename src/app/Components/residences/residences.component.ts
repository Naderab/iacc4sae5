import { Component } from '@angular/core';
import { Residence } from '../../core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  x: Residence = new Residence();
  show: boolean = false;
  listFavoris:Residence[]=[]
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
    },
  ];

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
