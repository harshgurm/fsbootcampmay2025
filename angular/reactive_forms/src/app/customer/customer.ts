import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {

  customer = [
    {id: 1, name: "Harsh"},
    {id: 2, name: "Runda"},
    {id: 3, name: "Dan"},
    {id: 4, name: "Stephanie"},
  ]

}
