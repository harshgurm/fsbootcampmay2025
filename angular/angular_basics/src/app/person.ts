import { Component, Injectable } from '@angular/core';
import { PersonInterface } from './person-interface';
@Injectable({
  providedIn: 'root'
})
export class Person {

  constructor() { }

  persons:PersonInterface[] = [
    { id: 1, name: "Harsh" },
    { id: 2, name: "Dan" },
    { id: 3, name: "Stephanie" },
    { id: 4, name: "Runda" },

  ]

  customers: PersonInterface[] = [
    {id: 1, name: "George"},
    {id: 2, name: "Smith"},
    {id: 3, name: "Rob"},
    {id: 4, name: "Micheal"},
  ]

  // display the values in home using a for loop

  person:PersonInterface = { id: 1, name: "Harsh" }

  getPersons(): PersonInterface[]{
    return this.persons;
  }


}
