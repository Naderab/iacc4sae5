import { Component } from '@angular/core';
import { Residence } from '../../../core/models/residence';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../../../services/residence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css'],
})
export class ResidenceDetailsComponent {
  listResidences: Residence[] = [];

  id!: number;
  selectedResidence: Residence = new Residence();
  currentIndex: number = 0;
  constructor(
    private a: ActivatedRoute,
    private r: Router,
    private residenceService: ResidenceService
  ) {
    this.listResidences = this.residenceService.listResidences;
    console.log(this.a.snapshot);
    this.id = this.a.snapshot.params['id'];
    this.selectedResidence = this.listResidences.find((r) => r.id == this.id)!;
    this.currentIndex = this.listResidences.findIndex((r) => r.id == this.id);
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.r.navigate([
        '/details/',
        this.listResidences[this.currentIndex]['id'],
      ]);
      this.selectedResidence = this.listResidences[this.currentIndex];
    }
  }
  next() {
    if (this.currentIndex < this.listResidences.length - 1) {
      this.currentIndex++;
      this.r.navigate([
        '/details/',
        this.listResidences[this.currentIndex]['id'],
      ]);
      this.selectedResidence = this.listResidences[this.currentIndex];
    }
  }
}
