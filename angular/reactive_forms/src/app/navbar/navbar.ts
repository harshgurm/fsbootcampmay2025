import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {


  router = inject(Router);

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['sign-in']);
  }

}
