import { Component, inject } from '@angular/core';
import { HomeDetails } from '../home-details/home-details';
import { Person } from '../person';
import { PersonInterface } from '../person-interface';

@Component({
  selector: 'app-home',
  imports: [HomeDetails],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  personService = inject(Person);

  customers:PersonInterface[] = this.personService.customers;

  imageUrl = "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg";

  updateImage() {    
    this.imageUrl = "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?semt=ais_hybrid&w=740";
  }

  // ngFor and ngIF conditions in a template

}
