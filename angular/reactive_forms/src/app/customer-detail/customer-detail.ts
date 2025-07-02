import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-detail.html',
  styleUrl: './customer-detail.css'
})
export class CustomerDetail {

  route = inject(ActivatedRoute);
  router = inject(Router);
  customerId = 0;
  customer$!:Observable<any>;
  
  customerService = inject(CustomerService);

  ngOnInit (){
    this.customerId = Number(this.route.snapshot.params['id']);
    if(this.customerId){
      this.customer$ = this.customerService.getCustomerById(this.customerId);
    }
  }

  backButton(){
    this.router.navigate(['/customers']);
  }

  updateCustomer(form:any){
    if(form.valid){
      this.customerService.updateCustomer( this.customerId, form.form.value).subscribe(result => {
        if(result){
          this.router.navigate(['/customers']);
        }
      });
    }
  }

}

//  7 mins
//create a new Service name it LoginService
//create an api in the service to connect with the sign in page with sign in node api