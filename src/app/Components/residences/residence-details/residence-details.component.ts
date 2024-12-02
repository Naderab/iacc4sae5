import { Component } from '@angular/core';
import { Residence } from '../../../core/models/residence';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css'],
})
export class ResidenceDetailsComponent {
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
  id!: number;
  selectedResidence: Residence = new Residence();
  currentIndex: number = 0;
  constructor(private a: ActivatedRoute,private r:Router) {
    console.log(this.a.snapshot)
    this.id = this.a.snapshot.params['id'];
    this.selectedResidence =
      this.listResidences.find((r) => r.id == this.id)!
    this.currentIndex =
      this.listResidences.findIndex((r) => r.id == this.id)
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.r.navigate(['/details/',
        this.listResidences[this.currentIndex]['id']])
      this.selectedResidence =
        this.listResidences[this.currentIndex]
    }
  }
  next() {
    if (this.currentIndex < this.listResidences.length - 1)
    {
      this.currentIndex++;
      this.r.navigate([
        '/details/',
        this.listResidences[this.currentIndex]['id'],
      ]);
      this.selectedResidence = this.listResidences[this.currentIndex];
      
    }
  }
}
