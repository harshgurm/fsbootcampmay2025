import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../customer-service';
// import { Customers } from '../customers';

@Component({
  selector: 'app-customer',
  imports: [RouterModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {


  customerService = inject(CustomerService);
  customers: any;


  ngOnInit(){
    this.getCustomers();
  }

  delCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe( params => {
      if(params){
        this.getCustomers();
      }
    })
  }

  getCustomers(){
      this.customerService.getCustomers().subscribe( params => {
        this.customers = params;
      console.log(this.customers);
    });
  }
  

}
