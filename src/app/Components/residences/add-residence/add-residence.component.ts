import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css'],
})
export class AddResidenceComponent {

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
  }
}
