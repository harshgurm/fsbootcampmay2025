import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignIn, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'reactive_forms';
}
