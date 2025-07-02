import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Customer } from './customer/customer';
// import { SignIn } from './sign-in/sign-in';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'template_forms';
}
