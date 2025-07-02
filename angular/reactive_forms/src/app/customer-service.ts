import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  http:HttpClient = inject(HttpClient);

  token = localStorage.getItem('token');


  getCustomerById(customer_id:number){
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization':  this.token ? this.token : ''});
    const options = {headers:headers};
    return this.http.get(`http://localhost:3000/customers/${customer_id}`, options);
    // OR
    // return this.http.get('http://localhost:3000/customers/' + customer_id);
  }

  getCustomers(){

    const headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization':  this.token ? this.token : ''});
    const options = {headers:headers};
    return this.http.get('http://localhost:3000/customers/', options);
  }

  addCustomers(data:any){
    return this.http.post('http://localhost:3000/customers/', data);
  }

  deleteCustomer(id:number){
    return this.http.delete(`http://localhost:3000/delete_customer/${id}`);
  }

  updateCustomer(id:number, data:any){
    return this.http.put(`http://localhost:3000/update_customers/${id}`, data);
  }

}
