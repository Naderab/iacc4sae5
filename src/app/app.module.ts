import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './Components/residences/residences.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Components/residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './Components/Apartmets/apartments/apartments.component';
import { AddApartmentComponent } from './Components/Apartmets/add-apartment/add-apartment.component';
import { ApartmentsByResidenceComponent } from './Components/Apartmets/apartments-by-residence/apartments-by-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartmentsComponent,
    AddApartmentComponent,
    ApartmentsByResidenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
