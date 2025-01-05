import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../../../services/residence.service';
import { Router } from '@angular/router';
import { ConsumerService } from '../../../services/consumer.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css'],
})
export class AddResidenceComponent {

  constructor(private residenceService:ResidenceService,private router:Router,private consumer:ConsumerService){}
  residence: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    address: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    status:new FormControl('Disponible', [])
  })

  get name() {
    return this.residence.get('name');
  }

  get address() {
    return this.residence.get('address');
  }

  get image() {
    return this.residence.get('image')
  }


  Add() {
    // console.log(this.name.value)
    // console.log(this.address.value);
    // console.log(this.image.value);
    // console.log(this.status.value);
    console.log(this.residence.value)
    //this.residenceService.addResidence(this.residence.value);
    this.consumer.add(this.residence.value).subscribe({
      next: () => this.router.navigate(['/residences']),
    });
    
  }
}
