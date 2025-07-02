import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [FormsModule, JsonPipe],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {

  customer = {
    name: '',
    age: 0,
    department: '',
  }

  submitCustomerForm(form_value: {}){
    console.log(form_value);
  }

}
