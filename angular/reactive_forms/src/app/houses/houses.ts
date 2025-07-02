import { Component } from '@angular/core';
import { HouseDetails } from '../house-details/house-details';
import { Home } from '../home';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-houses',
  imports: [HouseDetails, FormsModule],
  templateUrl: './houses.html',
  styleUrl: './houses.css'
})
export class Houses {

  description = "Housing details in Parent";
  event_name = "";

  houses: Home[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
    },
  ];

  childFromVal(event:string){
    this.event_name = event;
  }

}

// Task -  create a route for lifeCycleHooks componenet
// give it a path = hooks