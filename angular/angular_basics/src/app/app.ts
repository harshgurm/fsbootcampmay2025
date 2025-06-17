import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from './person';
import { PersonInterface } from './person-interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, NgClass, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Adding the service into a constructor
  // constructor(personService:Person){
  //   this.persons = personService.getPersons();
  // }

  // persons:any;

  
  //OR
  personService: Person = inject(Person);

  persons: PersonInterface[] = this.personService.getPersons();

  protected title = 'Angular Services';
  // String example
  my_name: String = "Harsh";
  // number example
  age: number = 29;

  person:PersonInterface = this.personService.person;
  //move this person variable to Person Service and consume it as either a variable or a function from that service class

  class_var = "text-info list-group-item";
  color_yellow = "yellow";
  class_error = "error";
  custom_style = "font-size: 24px; background-color:grey; color:white;"
  errors = false;

  isDisabled = false;

  imageUrl = "https://media.istockphoto.com/id/1450969748/photo/developer-working-with-new-program.jpg?s=612x612&w=0&k=20&c=FTq2MTCXwMTJxGCA_8o7516KFDaNZ0WCxdZR5M--KYs=";

  anotherImageUrl = "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg";

  disabled(val:boolean){
    this.isDisabled = val;
  }

  // Grab two images link from the
  // on click of a button i want you to update the image link to the send one

}
